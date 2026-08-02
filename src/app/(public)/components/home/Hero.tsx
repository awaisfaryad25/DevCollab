// components/hero/Hero.tsx
import Link from "next/link";
import { Zap, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-12 text-center md:py-16">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-120 w-200 rounded-full bg-primary opacity-20 blur-3xl dark:bg-secondary/20" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <span className=" inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-[#010066] dark:border-[#010066]">
          <Zap className="size-3" />
          Real-time collaboration for dev teams
        </span>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Ship faster,{" "}
          <span className="text-primary">together</span>
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          DevCollab gives your team projects, tasks, real-time chat, and
          analytics in one place. No more switching between five tools.
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="gradient flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#010066]/50 sm:w-auto"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#how-it-works"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            See how it works
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Free forever · No credit card required · Setup in 2 minutes
        </p>
      </div>

      {/* Dashboard preview */}
      <DashboardPreview/>
    </section>
  );
};

export default Hero;