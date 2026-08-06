import Link from "next/link";
import {
  ArrowRight,
  Users,
  Zap,
  ShieldCheck,
  MinusSquareIcon,
  Globe,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Team from '../components/Team'

const values = [
  {
    icon: Users,
    title: "Developer First",
    desc: "Everything we build is designed to help developers collaborate more effectively and focus on writing great code."
  },
  {
    icon: Zap,
    title: "Fast Collaboration",
    desc: "From project discovery to contribution, we make it simple for developers to connect and build together."
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "Open communication, secure collaboration, and respect for every contributor are at the core of our platform."
  }
];

const items = [
  {
    title: "Mission",
    icon: MinusSquareIcon,
    description: [
      "Our mission is to empower developers to build better software together. DevCollab provides a collaborative platform where developers can discover projects, contribute their skills, connect with like-minded engineers, and turn innovative ideas into successful products."
    ]
  },
  {
    title: "Vision",
    icon: Globe,
    description: [
      "We envision a future where collaboration becomes the foundation of software development. By connecting talented developers, startups, and creators, we aim to make building great software more accessible, efficient, and rewarding."
    ]
  },
  {
    title: "Leadership",
    icon: UsersRound,
    description: [
      "DevCollab is built by developers who understand the challenges of modern software engineering. Our team combines technical expertise with a passion for open collaboration, creating tools that help teams communicate, innovate, and deliver exceptional products.",
      "We believe in transparency, continuous learning, community-driven development, and building software that truly makes developers more productive."
    ]
  }
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
      <section className="mx-auto max-w-7xl px-6 py-20 bg-muted/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-green" strokeWidth={1.5} />
                  <h3 className="text-2xl lg:text-[25px] font-semibold font-display text-text-dark">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-1 text-text-body font-sans text-sm lg:text-[15px] xl:text-[13px] leading-relaxed">
                  {item.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            );
          })}
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
