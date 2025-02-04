"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "../Components/BlogCard";
import Navbarmin from "../Components/NavBarMin";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/blogPosts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Predefined tags instead of dynamically fetching from posts
  const predefinedTags = ["All", "Sports", "Tech", "Life"];

  // Filter posts based on selected tag
  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      <Navbarmin predefinedTags={predefinedTags} setSelectedTag={setSelectedTag} />

      <section
        id="blog"
        className="min-h-screen py-16 w-full" // Set width to full to prevent margins
        style={{ backgroundColor: "#f5e4d7" }} // Set consistent background color
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h1 className="text-4xl font-bold text-center mb-12 gradient-text underline-animation">
            daCow Blogs 🐮
          </h1>

          {/* TAG FILTER */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-md transition ${
                  selectedTag === tag
                    ? "bg-violet-400 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* BLOG POSTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.blogID}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No blogs found for "{selectedTag}".
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
