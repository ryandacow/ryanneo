"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams(); // Get slug from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogPosts/${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!post) return <p className="text-center text-red-500">Post not found</p>;

  return (
    <section className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">Published on {post.date}</p>
      <ReactMarkdown className="prose dark:prose-invert">{post.content}</ReactMarkdown>
    </section>
  );
};

export default BlogPost;