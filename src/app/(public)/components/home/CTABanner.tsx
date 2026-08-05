// components/cta-banner/CTABanner.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-2xl bg-secondary px-8 py-16 text-center">
        <h2 className="font-semibold text-white! text-3xl md:text-4xl">
          Ready to build faster?
        </h2>
        <p className="mt-4 text-sm text-white! leading-relaxed">
          Join thousands of developers who ship more with less friction. Free to
          start, no credit card needed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/auth/register"
            className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-secondary hover:bg-violet-50"
          >
            Get started for free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;