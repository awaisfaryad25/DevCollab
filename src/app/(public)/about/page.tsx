import Link from "next/link";
import { ArrowRight, Users, Zap, ShieldCheck } from "lucide-react";
import Team from '../components/Team'
// import SpotlightGrid from "@/app/ui/spot-light-grid";
// import NeumorphicInputs from "@/app/ui/NeumorphicInputs";
// import ClockDisplay from "@/app/ui/clock/ClockDisplay";

const values = [
  {
    icon: Users,
    title: "Built for teams",
    desc: "Every decision we make starts with one question: does this make teams work better together?",
  },
  {
    icon: Zap,
    title: "Speed over everything",
    desc: "Slow tools kill momentum. We obsess over performance so your team never waits on the software.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    desc: "Your data is yours. We never sell it, never share it, and encrypt everything at rest and in transit.",
  },
];

const team = [
  { name: "Awais Faryad", role: "Founder & CEO", initials: "AF", color: "bg-primary/20 text-secondary" },
  { name: "Sara Ahmad", role: "Head of Product", initials: "SA", color: "bg-emerald-100 text-emerald-700" },
  { name: "Omar Farooq", role: "Lead Engineer", initials: "OF", color: "bg-warning/20 text-warning" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            About us
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            We build tools for teams that ship
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            DevCollab started as a side project to solve our own frustration with
            bloated project management tools. Today it helps hundreds of dev teams
            move faster without the noise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 bg-muted/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Our mission</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Most project management software was designed for managers, not developers.
            It's full of features no one asked for and missing the ones that actually
            matter. Our mission is to build the tool we always wished existed — one
            that stays out of your way and helps your team focus on building.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="mb-10 text-2xl font-semibold text-foreground">What we believe</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Team/>
      {/* <section className="px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="mb-10 text-2xl font-semibold text-foreground">The team</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map(({ name, role, initials, color }) => (
              <div key={name} className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold ${color}`}>
                  {initials}
                </div>
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="border-t border-border px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Want to join us?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We're a small team with big ambitions. Come build with us.
        </p>
        <Link
          href="/careers"
          className="gradient mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-white"
        >
          See open roles <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* <SpotlightGrid count={78} /> */}
      {/* <NeumorphicInputs/> */}
      {/* <ClockDisplay /> */}
    </main>
  );
}
