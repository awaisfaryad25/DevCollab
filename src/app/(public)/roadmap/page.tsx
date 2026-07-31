import Link from "next/link";
import { CheckCircle2, Circle, Clock, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
 
const statusConfig = {
  done: { label: "Done", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950" },
  "in-progress": { label: "In progress", icon: Clock, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950" },
  planned: { label: "Planned", icon: Circle, color: "text-muted-foreground", bg: "bg-muted" },
  "coming-soon": { label: "Coming soon", icon: Rocket, color: "text-violet-600", bg: "bg-violet-50 dark:bg-violet-950" },
};
 
type Status = keyof typeof statusConfig;
 
type RoadmapItem = {
  title: string;
  desc: string;
  status: Status;
  quarter: string;
};
 
const items: RoadmapItem[] = [
  // Done
  { title: "User authentication", desc: "Register, login, Google OAuth, JWT sessions, forgot/reset password.", status: "done", quarter: "Q1 2026" },
  { title: "Admin dashboard", desc: "Overview, analytics, users, workspaces, projects, tasks, billing pages.", status: "done", quarter: "Q1 2026" },
  { title: "User management API", desc: "CRUD, search, filter, pagination, suspend/reactivate.", status: "done", quarter: "Q1 2026" },
  { title: "Dark mode", desc: "System, light, and dark themes across all pages.", status: "done", quarter: "Q2 2026" },
  { title: "Stripe payments", desc: "Pro plan checkout, webhook verification, subscription management.", status: "done", quarter: "Q2 2026" },
  { title: "Real-time chat", desc: "Socket.io team chat with workspace channels.", status: "done", quarter: "Q2 2026" },
 
  // In progress
  { title: "TanStack Query integration", desc: "Replacing dummy data with real API calls across all dashboard pages.", status: "in-progress", quarter: "Q2 2026" },
  { title: "Kanban board", desc: "Drag-and-drop task management with status columns per project.", status: "in-progress", quarter: "Q2 2026" },
  { title: "File uploads", desc: "Cloudinary integration for avatar and project cover uploads.", status: "in-progress", quarter: "Q2 2026" },
 
  // Coming soon
  { title: "Email notifications", desc: "Task assignment, deadline reminders, and mention alerts via Nodemailer.", status: "coming-soon", quarter: "Q3 2026" },
  { title: "Workspace invites", desc: "Invite members via email link with role assignment.", status: "coming-soon", quarter: "Q3 2026" },
  { title: "Project timeline view", desc: "Gantt-style timeline to visualize task schedules and dependencies.", status: "coming-soon", quarter: "Q3 2026" },
  { title: "Mobile app", desc: "iOS and Android apps using React Native.", status: "coming-soon", quarter: "Q3 2026" },
 
  // Planned
  { title: "SSO / SAML", desc: "Enterprise single sign-on for organizations using Okta, Azure AD, or Google Workspace.", status: "planned", quarter: "Q4 2026" },
  { title: "Public API", desc: "Developer REST API with OAuth2 app tokens for third-party integrations.", status: "planned", quarter: "Q4 2026" },
  { title: "Automation rules", desc: "Set up triggers like 'when task is completed → notify owner'.", status: "planned", quarter: "Q4 2026" },
  { title: "AI task suggestions", desc: "Smart task breakdown and priority suggestions powered by AI.", status: "planned", quarter: "2027" },
  { title: "Analytics exports", desc: "Export reports as CSV or PDF directly from the dashboard.", status: "planned", quarter: "2027" },
];
 
const groups: { status: Status; label: string }[] = [
  { status: "done", label: "Shipped" },
  { status: "in-progress", label: "In progress" },
  { status: "coming-soon", label: "Coming soon" },
  { status: "planned", label: "Planned" },
];

const Roadmap = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Roadmap
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Where DevCollab is headed
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our public roadmap — what we've shipped, what we're building, and
            what's coming next. Updated every release.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {Object.entries(statusConfig).map(([key, { label, icon: Icon, color }]) => (
              <span key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className={cn("h-3.5 w-3.5", color)} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
 
      {/* Roadmap grid */}
      <section className="px-6 lg:px-16 py-16">
        <div className="mx-auto max-w-7xl space-y-14">
          {groups.map(({ status, label }) => {
            const groupItems = items.filter((i) => i.status === status);
            const { icon: Icon, color, bg } = statusConfig[status];
            return (
              <div key={status}>
                {/* Group heading */}
                <div className="mb-6 flex items-center gap-3">
                  <div className={cn("flex h-7 w-7 items-center justify-center rounded-full", bg)}>
                    <Icon className={cn("h-4 w-4", color)} />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{label}</h2>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {groupItems.length}
                  </span>
                </div>
 
                {/* Items grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {groupItems.map((item) => (
                    <div
                      key={item.title}
                      className={cn(
                        "rounded-xl border border-border bg-background p-4",
                        status === "done" && "opacity-80"
                      )}
                    >
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {item.title}
                        </p>
                        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                          {item.quarter}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
 
      {/* CTA */}
      <section className="border-t border-border bg-muted/40 px-4 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-xl font-semibold text-foreground">
            Have a feature request?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We're always listening. Send us your ideas and we'll consider them
            for a future release.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Suggest a feature
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            See what we've already shipped →{" "}
            <Link href="/changelog" className="text-primary hover:underline">
              Changelog
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Roadmap