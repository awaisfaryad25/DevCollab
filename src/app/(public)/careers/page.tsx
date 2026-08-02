import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

const roles = [
  {
    status: "active",
    createdAt: "2024-06-05T12:00:00Z",
    title: "Senior Full-Stack Engineer",
    type: "FULL_TIME",
    salary: {
      from: 120000,
      to: 150000,
      currency: "USD"
    },
    location: "Remote",
    team: "Engineering",
    id: 1,
  },
  {
    status: "active",
    createdAt: "2024-06-03T10:30:00Z",
    title: "Product Designer",
    team: "Design",
    type: "FULL_TIME",
    salary: {
      from: 100000,
      to: 130000,
      currency: "USD"
    },
    location: "Remote",
    id: 2,
  },
  {
    status: "closed",
    createdAt: "2024-05-28T09:15:00Z",
    title: "DevOps Engineer",
    team: "Infrastructure",
    type: "FULL_TIME",
    salary: {
      from: 130000,
      to: 160000,
      currency: "USD"
    },
    location: "Remote",
    id: 3,
  },
  {
    status: "active",
    createdAt: "2024-06-01T14:45:00Z",
    title: "Frontend Developer",
    team: "Engineering",
    type: "CONTRACT",
    salary: {
      from: 80000,
      to: 100000,
      currency: "USD"
    },
    location: "Remote",
    id: 4,
  },
  {
    status: "active",
    createdAt: "2024-05-30T11:20:00Z",
    title: "Data Scientist",
    team: "Data",
    type: "FULL_TIME",
    salary: {
      from: 110000,
      to: 140000,
      currency: "USD"
    },
    location: "Remote",
    id: 5,
  },
  {
    status: "closed",
    createdAt: "2024-05-25T08:00:00Z",
    title: "Mobile Developer",
    team: "Engineering",
    type: "FULL_TIME",
    salary: {
      from: 95000,
      to: 120000,
      currency: "USD"
    },
    location: "Remote",
    id: 6,
  },
];

const perks = [
  "100% remote — work from anywhere",
  "Competitive salary + equity",
  "Flexible hours — async by default",
  "Home office budget ($1,000)",
  "Learning & conference budget",
  "Health coverage",
];

export default function CareersPage() {
  // Format salary range
  const formatSalary = (from: number, to: number, currency: string) => {
    const formatNumber = (num: number) => {
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + "K";
      }
      return num.toString();
    };
    return `${formatNumber(from)}${formatNumber(to) !== formatNumber(from) ? ` - ${formatNumber(to)}` : ""} ${currency}`;
  };

  // Format time ago
  const getTimeAgo = (createdAt: string) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - new Date(createdAt).getTime()) / (1000 * 60 * 60)
    );
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours === 1) return "1hr ago";
    if (diffInHours < 24) return `${diffInHours}hrs ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  // Format job type display
  const formatJobType = (type: string) => {
    return type.split("_").map(word => 
      word.charAt(0) + word.slice(1).toLowerCase()
    ).join(" ");
  };

  // Check if job is active
  const isJobActive = (status: string): boolean => {
    return status === "active";
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Careers
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Build the tool builders use
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            We're a small, fully remote team on a mission to make software teams
            10x more effective. If that sounds like your kind of problem, read on.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Why DevCollab</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-warning text-">✓</span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open roles - Redesigned to match CareersJobs component */}
      <section className="border-t border-border bg-muted/40 px-6 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="mb-12 text-2xl font-semibold text-foreground text-center">
            We're Growing — Join Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-card dark:bg-card-foreground rounded-xl space-y-2 p-4 lg:px-6 lg:py-7 shadow-sm shadow-primary/40 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <h3 className={`font-medium ${isJobActive(role.status) ? "text-cyan-blue" : "text-muted-text"}`}>
                    {isJobActive(role.status) ? "Open Role" : "Closed Role"}
                  </h3>

                  <span className="ml-2 size-1.5 rounded-full bg-cyan-blue" />
                  <span className="text-muted-text text-sm">{getTimeAgo(role.createdAt)}</span>
                </div>

                <h2 className="text-base 2xl:text-lg 4xl:text-xl text-dark-gray font-medium">
                  {role.title}
                </h2>

                <div className="flex items-center gap-2 text-[12px] 2xl:text-[14px] flex-wrap">
                  <h3 className="text-slate-gray">
                    {formatJobType(role.type)}
                  </h3>

                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-cyan-blue" />
                    <span className="text-slate-gray">
                      {formatSalary(
                        role.salary.from,
                        role.salary.to,
                        role.salary.currency
                      )}
                    </span>
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-cyan-blue" />
                    <span className="text-slate-gray">{role.location}</span>
                  </span>
                </div>

                {isJobActive(role.status) ? (
                  <Link
                    href={`/careers/${role.id}`}
                    className="text-cyan-blue text-sm 2xl:text-base font-semibold hover:underline mt-3 inline-block"
                  >
                    View & Apply
                  </Link>
                ) : (
                  <h3 className="text-muted-text font-semibold">
                    Position Filled
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Submit resume */}
      <section className="font-dm-sans flex flex-col items-center justify-center gap-6 py-10 lg:py-12 mb-6 lg:mb-10">
        <h2 className="text-center text-xl lg:text-2xl 2xl:text-3xl 4xl:text-4xl font-medium text-dark-gray tracking-tight">
           Couldn&apos;t find your role?
        </h2>
          <Link
            href="/careers-submit-resume"
            className="gradient text-white px-6 py-2 rounded-lg text-xs 2xl:text-base mt-4 cursor-pointer"
          >
            Send your Resume
          </Link>
      </section>
    </main>
  );
}