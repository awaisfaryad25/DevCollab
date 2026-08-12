import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string | StaticImageData;
  video?: string;
  btnTitle?: string;
  href?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = "About us",
  title = "We build tools for teams that ship",
  description = "DevCollab started as a side project to solve our own frustration with bloated project management tools. Today it helps hundreds of dev teams move faster without the noise.",
  image,
  video,
  btnTitle = "Request Consultation",
  href = "/contact",
}) => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[75vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-linear-to-r from-secondary/80 to-[#072445]/80" />
        )}
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-[#072445]/40 to-transparent" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-0">
          <div className="flex flex-col items-start gap-4">
            <span className=" inline-flex rounded-full border border-primary/20! bg-white/20 backdrop-blur-md px-4 py-2 text-xs 4xl:text-[13px] text-white shadow-md font-semibold uppercase tracking-widest">
              {eyebrow}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 4xl:text-7xl font-bold leading-[1.2] md:leading-[1.3] text-white! capitalize">
              {title}
            </h1>
            <p className="max-w-180 text-sm sm:text-base 2xl:text-lg font-regular text-white! opacity-95">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-4">
              <Link
                href={href}
                className="group flex items-center gap-2 font-semibold border border-white hover:border-transparent hover:bg-linear-to-r from-primary to-secondary px-5 py-3 rounded-lg relative cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 text-white transition-all duration-300">
                  {btnTitle}
                </span>
                <span className="relative z-10 size-6 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary">
                  <ArrowUpRight className="size-3 text-white group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;