// components/pricing/Pricing.tsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "Perfect for individuals and small teams getting started.",
    cta: "Get started free",
    href: "/auth/register",
    highlight: false,
    features: [
      "Up to 3 projects",
      "5 team members",
      "Kanban & list views",
      "Basic analytics",
      "Email notifications",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For growing teams that need more power and fewer limits.",
    cta: "Start Pro trial",
    href: "/auth/register?plan=pro",
    highlight: true,
    features: [
      "Unlimited projects",
      "Unlimited members",
      "Real-time team chat",
      "Advanced analytics",
      "Priority support",
      "File uploads (10 GB)",
      "Custom roles & permissions",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Dedicated infrastructure, SSO, and a dedicated account manager.",
    cta: "Contact us",
    href: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "SSO / SAML login",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Onboarding support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Start free. Upgrade when your team is ready.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-xl border p-6",
                plan.highlight
                  ? "border-secondary bg-secondary text-white shadow-lg shadow-secondary dark:shadow-violet-900/30"
                  : "border-border bg-background"
              )}
            >
              {plan.highlight && (
                <span className="mb-3 inline-block w-fit rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3
                className={cn(
                  "text-base font-semibold",
                  plan.highlight ? "text-white" : "text-foreground"
                )}
              >
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={cn(
                    "text-3xl font-bold",
                    plan.highlight ? "text-white" : "text-foreground"
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlight ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.highlight ? "text-white/80" : "text-muted-foreground"
                )}
              >
                {plan.desc}
              </p>
              <ul className="my-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={cn(
                        "h-4 w-4 shrink-0",
                        plan.highlight ? "text-white/80" : "text-[#010066]"
                      )}
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/90" : "text-foreground"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors",
                  plan.highlight
                    ? "bg-white text-[#010066] hover:bg-violet-50"
                    : "border border-border bg-background text-foreground hover:bg-accent"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;