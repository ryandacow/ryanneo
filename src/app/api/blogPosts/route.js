import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  console.log("API Route Hit ✅"); // ✅ Debugging log

  const blogDirectory = path.join(process.cwd(), "src/Data/blogPosts");
  
  if (!fs.existsSync(blogDirectory)) {
    console.error("Blog directory does NOT exist ❌");
    return NextResponse.json({ error: "Blog directory not found" }, { status: 404 });
  }

  console.log("Blog directory found ✅");
  
  const files = fs.readdirSync(blogDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
      date: data.date || "No date",
      excerpt: data.summary || "No summary available.",
    };
  });

  console.log("Returning posts:", posts); // ✅ Check output
  return NextResponse.json(posts);
}