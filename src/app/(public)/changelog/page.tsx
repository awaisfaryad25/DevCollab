import Link from "next/link";
import { Zap, Bug, Star, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const typeConfig = {
  feature: { label: "Feature", icon: Star, color: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300" },
  fix: { label: "Fix", icon: Bug, color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400" },
  improvement: { label: "Improvement", icon: Zap, color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
  security: { label: "Security", icon: Shield, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
};

type ChangeType = keyof typeof typeConfig;

type Release = {
  version: string;
  date: string;
  tag?: "latest" | "major";
  changes: { type: ChangeType; text: string }[];
};

const releases: Release[] = [
  {
    version: "v1.4.0",
    date: "June 14, 2026",
    tag: "latest",
    changes: [
      { type: "feature", text: "Real-time team chat with Socket.io — channel-based messaging per workspace." },
      { type: "feature", text: "Drag-and-drop kanban board for project tasks." },
      { type: "improvement", text: "Dashboard overview now shows a 7-day user signups area chart using Recharts." },
      { type: "improvement", text: "Email logs page now includes a preview drawer with resend functionality." },
      { type: "fix", text: "Fixed CORS preflight error in Express 5 with the wildcard route." },
      { type: "security", text: "Rate limiting added to /auth/login — 5 attempts per 15 minutes." },
    ],
  },
  {
    version: "v1.3.0",
    date: "May 28, 2026",
    changes: [
      { type: "feature", text: "Stripe payment integration — Pro plan checkout, webhooks, and subscription management." },
      { type: "feature", text: "Invoices and Transactions pages in the admin dashboard." },
      { type: "feature", text: "Admin can now suspend and reactivate user accounts." },
      { type: "improvement", text: "Sidebar now highlights the active page using Next.js usePathname()." },
      { type: "fix", text: "Fixed token not being read from Zustand persist storage in axios interceptor." },
    ],
  },
  {
    version: "v1.2.0",
    date: "May 10, 2026",
    changes: [
      { type: "feature", text: "Google OAuth login via NextAuth.js." },
      { type: "feature", text: "Forgot password and reset password flows with Nodemailer email delivery." },
      { type: "feature", text: "Email verification on registration." },
      { type: "improvement", text: "Auth pages redesigned with background gradient and logo." },
      { type: "improvement", text: "Input component now supports auth and default variants with proper focus styles." },
      { type: "fix", text: "Fixed double dotenv.config() call causing env variables to not load correctly." },
    ],
  },
  {
    version: "v1.1.0",
    date: "April 22, 2026",
    changes: [
      { type: "feature", text: "Full admin dashboard with Overview, Users, Analytics, Reports pages." },
      { type: "feature", text: "User management API — CRUD, search, filter, pagination, and suspend toggle." },
      { type: "feature", text: "Workspaces, Projects, and Tasks management pages." },
      { type: "improvement", text: "TanStack Query + Zustand integration for server and client state." },
      { type: "improvement", text: "Dark mode support across all pages using next-themes." },
      { type: "fix", text: "Fixed Select component dropdown not showing custom styles (replaced native select with custom div)." },
    ],
  },
  {
    version: "v1.0.0",
    date: "April 1, 2026",
    tag: "major",
    changes: [
      { type: "feature", text: "Initial release of DevCollab." },
      { type: "feature", text: "User registration and login with JWT authentication." },
      { type: "feature", text: "Workspace and project management foundation." },
      { type: "feature", text: "MongoDB + Mongoose data layer with bcrypt password hashing." },
      { type: "feature", text: "Swagger API documentation at /api/docs." },
      { type: "feature", text: "Public landing page with hero, features, pricing, and testimonials." },
    ],
  },
];

const Changelog = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 py-16 text-center">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Changelog
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What's new in DevCollab
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every release, fix, and improvement — documented as we ship.
          </p>
          <Link
            href="/roadmap"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            See what's coming next on the roadmap
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Releases */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-14">
          {releases.map((release) => (
            <div key={release.version} className="flex gap-6">
              {/* Version label */}
              <div className="flex w-24 shrink-0 flex-col items-end pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-foreground">
                    {release.version}
                  </span>
                  {release.tag && (
                    <span className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                      release.tag === "latest"
                        ? "bg-primary/10 text-primary"
                        : "bg-amber-100 text-amber-700"
                    )}>
                      {release.tag}
                    </span>
                  )}
                </div>
                <span className="mt-0.5 text-[11px] text-muted-foreground">
                  {release.date}
                </span>
              </div>

              {/* Divider line */}
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                <div className="mt-1 flex-1 w-px bg-border" />
              </div>

              {/* Changes */}
              <div className="flex-1 pb-4">
                <ul className="space-y-3">
                  {release.changes.map((change, i) => {
                    const { label, icon: Icon, color } = typeConfig[change.type];
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className={cn(
                          "mt-0.5 flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                          color
                        )}>
                          <Icon className="h-2.5 w-2.5" />
                          {label}
                        </span>
                        <p className="text-sm text-foreground leading-relaxed">
                          {change.text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Changelog