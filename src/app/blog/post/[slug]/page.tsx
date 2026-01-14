import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "../../../../lib/blog";
import BlogHeader from "../../../components/blog/BlogHeader";
import BlogPostContent from "../../../components/blog/BlogPostContent";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ---------------- DYNAMIC SEO METADATA ---------------- */

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Satyam Khatiwada",
      description: "The requested blog post could not be found.",
    };
  }

  const excerpt =
    post.description ||
    post.content.replace(/<[^>]*>/g, "").slice(0, 160) + "...";

  const titleKeywords = post.title
    .split(" ")
    .filter((word) => word.length > 3);

  // Safely handle tags to fix the Vercel Type Error
  const postTags = (post as any).tags ?? [
    "Technology",
    "Quality Assurance",
    "Software",
    "Career",
  ];

  return {
    title: `${post.title} | Satyam Khatiwada`,
    description: excerpt,

    keywords: [
      "Satyam Khatiwada",
      "QA Engineer",
      "Software Testing",
      "Quality Assurance",
      "Tech Blog",
      ...titleKeywords,
      ...postTags,
    ],

    authors: [{ name: "Satyam Khatiwada", url: "https://satyamkhatiwada.com.np" }],
    creator: "Satyam Khatiwada",
    publisher: "Satyam Khatiwada",

    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://satyamkhatiwada.com.np/blog/post/${post.slug}`,
      title: post.title,
      description: excerpt,
      siteName: "Satyam Khatiwada — Writings",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: ["Satyam Khatiwada"],
      publishedTime: new Date(post.date).toISOString(),
      tags: postTags,
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: [post.image],
    },

    alternates: {
      canonical: `https://satyamkhatiwada.com.np/blog/post/${post.slug}`,
    },
  };
}

/* ---------------- PAGE ---------------- */

export default async function IndividualBlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) notFound();

  // SEO: Structured Data (JSON-LD) for Google "Article" rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": "Satyam Khatiwada",
      "url": "https://satyamkhatiwada.com.np"
    }],
    "description": post.description || "",
  };

  return (
    <div className="min-h-screen text-white">
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="mx-auto max-w-[1200px] px-6 mt-6">
      <BlogHeader 
        backLink="/blog" 
        backText="Back to Writings" 
        title={post.title} // 👈 This satisfies the 'BlogHeaderProps' requirement
      />        
        <main id="main-content"> {/* Accessibility: Use main tag */}
          <BlogPostContent post={post} />
        </main>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}