import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const blogDirectory = path.join(process.cwd(), "src/Data/blogPosts");

  if (!fs.existsSync(blogDirectory)) {
    return NextResponse.json({ error: "Blog directory not found" }, { status: 404 });
  }

  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      blogID: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
      date: data.date || "No date",
      tags: data.tags || "All",
      excerpt: data.summary || "No summary available.",
    };
  });

  return NextResponse.json(posts);
}