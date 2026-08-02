// components/how-it-works/HowItWorks.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create your workspace",
    desc: "Sign up in seconds with Google or email. Set up a workspace for your team and invite members instantly.",
  },
  {
    number: "02",
    title: "Build your projects",
    desc: "Add projects, break them into tasks, assign owners, and set due dates. Your whole roadmap in one place.",
  },
  {
    number: "03",
    title: "Collaborate in real time",
    desc: "Chat, comment on tasks, and watch the board update live as your team makes progress — no refresh needed.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-muted/40 px-6 py-24">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Up and running in minutes
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ number, title, desc }) => (
            <div key={number} className="relative flex flex-col items-start">
              <span className="mb-4 text-4xl font-bold text-primary">
                {number}
              </span>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/auth/register"
            className="gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white hover:bg-violet-700"
          >
            Try it now — it's free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;