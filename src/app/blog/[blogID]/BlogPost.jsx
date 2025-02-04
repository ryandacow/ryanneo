"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";  
import remarkBreaks from "remark-breaks";  
import rehypeRaw from "rehype-raw";  

const BlogPost = () => {
  const { blogID } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogID) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogPosts/${blogID}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [blogID]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!post) return <section className="bg-[#f5e4d7] min-h-screen flex items-center justify-center">
    <p className="text-gray-500 text-lg">Post not found.</p>
  </section>;

  return (
    <section className="min-h-screen px-6 py-16 bg-[#f5e4d7]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{post.date}</p>
        
        {/* ✅ Markdown rendering with correct lists */}
        <article className="prose dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}  
            rehypePlugins={[rehypeRaw]}  
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-8">
          <Link href="/blog" className="text-indigo-500 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;