import Image from "next/image";

export default async function BlogPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log({ id });

  const blogResponse = await fetch(`http://localhost:3001/blogs/${id}`);
  const blog = await blogResponse.json();

  console.log({ blog });
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="https://placehold.co/640x400.png"
          alt="blog"
          width={640}
          height={400}
        />
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
