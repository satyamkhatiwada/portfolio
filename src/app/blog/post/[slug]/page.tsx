import React from "react";
import Link from "next/link";
import Footer from "../../../components/Footer";
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

  return {
    title: `${post.title} | Satyam Khatiwada`,
    description: excerpt,

    keywords: [
      "Satyam Khatiwada",
      "QA Engineer",
      "Software Testing",
      "Quality Assurance",
      "Tech Blog",
      "Software Engineering",
      "Career",
      ...titleKeywords,
    ],

    authors: [
      {
        name: "Satyam Khatiwada",
        url: "https://satyamkhatiwada.com.np",
      },
    ],

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
      tags: post.tags ?? [
        "Technology",
        "Quality Assurance",
        "Software",
        "Career",
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: [post.image],
      creator: "@satyamkhatiwada", // change if you have one
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `https://satyamkhatiwada.com.np/blog/post/${post.slug}`,
    },

    other: {
      "article:author": "Satyam Khatiwada",
      "article:published_time": new Date(post.date).toISOString(),
      "article:modified_time": new Date().toISOString(),
      "article:section": "Technology",
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

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto max-w-[1200px] px-6 mt-6">
        <BlogHeader backLink="/blog" backText="Back to Writings" />
        <BlogPostContent post={post} />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

/* ---------------- STATIC PARAMS ---------------- */

export async function generateStaticParams() {
  return getAllPostSlugs();
}
