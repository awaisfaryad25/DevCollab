// components/features/Features.tsx
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team workspaces",
    desc: "Invite your team, assign roles, and keep every project in one shared space. Admin, member, and viewer access built in.",
  },
  {
    icon: MessageSquare,
    title: "Real-time chat",
    desc: "Discuss tasks without leaving the app. Channel-based chat powered by Socket.io updates instantly for everyone.",
  },
  {
    icon: BarChart3,
    title: "Project analytics",
    desc: "Track task completion, team velocity, and deadline health from one clean dashboard — no spreadsheets needed.",
  },
  {
    icon: Zap,
    title: "Kanban & list views",
    desc: "Switch between board and list layout per project. Drag tasks, set priorities, and assign due dates in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Google OAuth, password hashing, JWT sessions, and protected routes. Your data never leaves our encrypted servers.",
  },
  {
    icon: CheckCircle2,
    title: "Email notifications",
    desc: "Get notified when tasks are assigned, deadlines approach, or teammates mention you — straight to your inbox.",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything your team needs
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Built for software teams who want speed without the setup headache.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-secondary p-2.5 ">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;