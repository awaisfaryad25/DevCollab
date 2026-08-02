"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, Mail, MessageSquare, User } from "lucide-react";
import Input from "@/app/ui/Input";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: POST to /api/contact → Nodemailer sends email
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
            Contact
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Questions, feedback, or just want to say hi? We read every message.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              How can we help?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email us</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    hello@devcollab.io
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    We reply within 24 hours on business days.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Support</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    For billing or account issues, use the form and select
                    "Support" as the topic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-background p-6">
            {!done ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="First Name" type="text" placeholder="Awais Faryad" leftIcon={<User className="size-4" />} required />
                  <Input label="Last Name" type="text" placeholder="Awais Faryad" leftIcon={<User className="size-4" />} required />
                </div>
                  <Input label="Email" type="email" placeholder="you@example.com" leftIcon={<Mail className="size-4" />} required />
                <div>
                  <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-foreground">
                    Topic
                  </label>
                  <select
                    id="topic"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1"
                  >
                    <option>General enquiry</option>
                    <option>Support</option>
                    <option>Billing</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Send message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
