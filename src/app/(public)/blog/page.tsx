import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/app/data/blogs";
import BlogCard from "../components/blogs/BlogCard";

const posts = [
  {
    slug: "building-real-time-apps-with-socket-io",
    tag: "Engineering",
    tagColor: "bg-secondary/10 violet-50 text-secondary",
    title: "Building real-time apps with Socket.io and Next.js",
    excerpt:
      "A deep dive into how we built DevCollab's live kanban board — from connection management to optimistic UI updates.",
    date: "June 10, 2026",
    readTime: "8 min read",
    initials: "AF",
    color: "bg-secondary/20 text-secondary",
  },
  {
    slug: "stripe-webhooks-the-right-way",
    tag: "Backend",
    tagColor: "bg-emerald-50 text-emerald-700",
    title: "Stripe webhooks the right way: signature verification and idempotency",
    excerpt:
      "Most tutorials skip the security part. Here's how to handle Stripe webhooks without accidentally charging users twice.",
    date: "May 28, 2026",
    readTime: "6 min read",
    initials: "OF",
    color: "bg-orange-100 text-orange-700",
  },
  {
    slug: "mongodb-schema-design-for-saas",
    tag: "Database",
    tagColor: "bg-amber-50 text-amber-700",
    title: "MongoDB schema design for multi-tenant SaaS",
    excerpt:
      "How we structured workspaces, projects, and permissions in MongoDB without joins and without regret.",
    date: "May 14, 2026",
    readTime: "10 min read",
    initials: "SA",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
            Blog
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Thinking out loud
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Engineering deep-dives, product updates, and lessons learned building
            DevCollab.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 py-20">
        <div className="w-full max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl lg:text-3xl 4xl:text-4xl font-bold text-brand-blue">
              Latest Blogs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 4xl:gap-7">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} href={`/blogs/${blog.slug}`} />
            ))}
          </div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h2 className="mb-2 text-base font-semibold text-foreground group-hover:text-secondary">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${post.color}`}>
                  {post.initials}
                </div>
                <span className="text-xs text-muted-foreground">DevCollab team</span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-secondary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}