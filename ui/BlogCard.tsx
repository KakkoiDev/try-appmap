import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  id,
  title,
  content,
}: {
  id: number;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-[640px] border p-4 rounded-md">
      <Image
        className="rounded-md"
        src="https://placehold.co/600x400.png"
        alt="image"
        width={600}
        height={400}
      />
      <p className="text-xl font-bold">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        <p className="col-span-3 overflow-hidden text-ellipsis whitespace-nowrap">
          {content}
        </p>
        <Link
          href={`/blog/${id}`}
          className="block text-center bg-blue-500 text-white p-2 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
