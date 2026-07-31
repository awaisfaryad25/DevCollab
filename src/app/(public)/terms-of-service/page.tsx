import Link from "next/link";
 
const sections = [
  {
    title: "1. Acceptance of terms",
    content: `By accessing or using DevCollab ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. These terms apply to all users, including free and paid plan subscribers.`,
  },
  {
    title: "2. Description of service",
    content: `DevCollab is a project management and team collaboration platform that allows users to create workspaces, manage projects and tasks, communicate in real time, and track team progress. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.`,
  },
  {
    title: "3. User accounts",
    content: `You must create an account to use most features of DevCollab. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at hello@devcollab.io of any unauthorized use of your account. You must be at least 16 years of age to use this Service.`,
  },
  {
    title: "4. Acceptable use",
    content: `You agree not to use DevCollab to: upload or share content that is unlawful, harmful, abusive, or violates any third-party rights; attempt to gain unauthorized access to any part of the Service or other users' accounts; transmit viruses, malware, or any other harmful code; reverse-engineer, decompile, or disassemble any part of the Service; use the Service to send spam or unsolicited communications.`,
  },
  {
    title: "5. Subscription and billing",
    content: `DevCollab offers a free plan and a paid Pro plan. Paid subscriptions are billed monthly via Stripe. You authorize us to charge your payment method on a recurring basis. You may cancel your subscription at any time from your billing settings. Cancellation takes effect at the end of the current billing period. We do not offer refunds for partial billing periods unless required by law.`,
  },
  {
    title: "6. Intellectual property",
    content: `DevCollab and its original content, features, and functionality are owned by DevCollab and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of all content you upload to the Service. By uploading content, you grant us a limited, non-exclusive license to store, display, and process your content solely to provide the Service.`,
  },
  {
    title: "7. Privacy",
    content: `Your use of DevCollab is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal data.`,
  },
  {
    title: "8. Termination",
    content: `We may suspend or terminate your account at our discretion if you violate these Terms, engage in fraudulent activity, or if your account remains inactive for an extended period. Upon termination, your right to use the Service ceases immediately. You may export your data before termination by contacting our support team.`,
  },
  {
    title: "9. Limitation of liability",
    content: `To the maximum extent permitted by applicable law, DevCollab shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service. Our total liability to you for any claims arising from these Terms shall not exceed the amount you paid us in the 12 months prior to the claim.`,
  },
  {
    title: "10. Governing law",
    content: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be resolved through binding arbitration, except where prohibited by law.`,
  },
  {
    title: "11. Changes to terms",
    content: `We may update these Terms from time to time. We will notify you of significant changes via email or an in-app notification at least 14 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.`,
  },
  {
    title: "12. Contact",
    content: `If you have any questions about these Terms, please contact us at hello@devcollab.io or through our contact page.`,
  },
];

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 lg:px-16 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h2 className='text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-7xl font-semibold bg-linear-to-r from-primary! via-secondary! to-secondary! bg-clip-text! text-transparent! 2xl:leading-15 4xl:leading-21'>
            Terms of service
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 14, 2026 · Effective: June 14, 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Please read these terms carefully before using DevCollab. They govern
            your access to and use of our platform.
          </p>
        </div>
      </section>
 
      {/* Content */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          {/* Sticky sidebar nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Sections
              </p>
              {sections.map((s) => (
                <a
                  key={s.title}
                  href={`#${s.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="block text-xs text-muted-foreground hover:text-primary truncate py-0.5"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>
 
          {/* Main content */}
          <div className="space-y-10 lg:col-span-3">
            {sections.map((s) => (
              <div
                key={s.title}
                id={s.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
              >
                <h2 className="mb-3 text-base font-semibold text-foreground">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.content}
                </p>
              </div>
            ))}
 
            {/* Footer links */}
            <div className="border-t border-border pt-8">
              <p className="text-xs text-muted-foreground">
                Have questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                · View our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfService