import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(req, context) {
  const { params } = context;  // ✅ Await params before accessing properties
  if (!params || !params.blogID) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { blogID } = params;
  const filePath = path.join(process.cwd(), "src/Data/blogPosts", `${blogID}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return NextResponse.json({
    title: data.title || "Untitled Post",
    date: data.date || "No date",
    content: content.trim(),
  });
}