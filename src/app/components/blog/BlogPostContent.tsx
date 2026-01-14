import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { BlogPostWithContent } from "../../../lib/blog";

interface BlogPostContentProps {
  post: BlogPostWithContent;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Image - FIXED THE ZOOM HERE */}
      <div className="aspect-video bg-[#ffffff] relative overflow-hidden rounded-xl mb-8 border border-white/10 shadow-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          /* Changed from object-cover to object-contain to stop the zoom */
          className="object-contain p-4" 
          priority
        />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {post.title}
        </h1>

        <p className="text-lg text-white/70 mb-6">{post.description}</p>

        {/* Meta Info */}
        <div className="flex items-center space-x-6 text-sm text-white/50 pb-6 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="w-4 h-4 text-spotify-green" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="w-4 h-4 text-spotify-green" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-none">
        <div
          className="text-white/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}