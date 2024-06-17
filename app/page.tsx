"use client";

import { BlogCard } from "@/ui/BlogCard";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBlogs = useCallback(async () => {
    const blogsResponse = await fetch(
      "http://localhost:3001/blogs" + (search ? `?q=${search}` : "")
    );
    const blogs = await blogsResponse.json();
    setBlogs(blogs);
  }, [search]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">Blog</h1>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 "
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-4 items-center">
        {blogs.map((blog: { id: number; title: string; content: string }) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}
