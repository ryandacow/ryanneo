import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-indigo-500 hover:underline mt-4 inline-block">
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;