import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { StaticImageData } from "next/image";

interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  author: string;
  href:string
}

const BlogCard = ({
  image,
  title,
  category,
  date,
  readTime,
  description,
  author,
  href
}: BlogCardProps) => {

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Link href={href} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category */}
        <span className="absolute bottom-4 left-4 inline-flex rounded-full border border-white/20 bg-white/15 backdrop-blur-md px-4 py-2 text-xs 4xl:text-[13px] font-medium text-white shadow-lg">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        
        <div className="flex items-center gap-4 text-xs 3xl:text-sm text-text-body">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            {readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg 2xl:text-xl 4xl:[22px] font-bold text-brand-blue group-hover:text-brand-green transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-text-body text-xs 2xl:text-sm leading-5 xl:leading-6 line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-1 flex items-center justify-between border-t border-gray-50 pt-3">
          <div className="flex items-center gap-1.5 text-xs 4xl:text-sm text-text-body">
            <User className="h-3.5 w-3.5" />
            <span>{author}</span>
          </div>

          <p className="flex items-center gap-1 text-xs 2xl:text-sm font-medium text-text-body hover:text-brand-green transition-opacity hover:underline">
            Read More
            <ArrowRight className="size-3" />
          </p>
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;