import Link from "next/link";
 
const sections = [
  {
    title: "1. Information we collect",
    content: `We collect information you provide directly: your name, email address, and password when you register; payment information processed securely via Stripe (we never store card numbers); profile details and workspace content you create. We also collect usage data automatically: pages visited, features used, browser type, IP address, and device information. This helps us improve the Service and fix issues faster.`,
  },
  {
    title: "2. How we use your information",
    content: `We use your information to: provide, operate, and improve DevCollab; process payments and send invoices; send transactional emails (verification, password reset, billing receipts); notify you of product updates and security alerts; respond to your support requests; detect and prevent fraud or abuse; comply with legal obligations.`,
  },
  {
    title: "3. Data sharing",
    content: `We do not sell your personal data. We share it only with: trusted service providers who help us operate the platform (Stripe for payments, MongoDB Atlas for database hosting, Cloudinary for file storage, Nodemailer/SMTP for email delivery); law enforcement or government authorities when legally required; a successor entity in the event of a merger, acquisition, or sale of assets, with advance notice to you.`,
  },
  {
    title: "4. Cookies",
    content: `We use essential cookies to keep you logged in and remember your preferences (such as theme mode). We do not use advertising or tracking cookies. You can control cookie settings in your browser, but disabling essential cookies may affect your ability to use the Service. We do not use third-party analytics cookies.`,
  },
  {
    title: "5. Data retention",
    content: `We retain your account data for as long as your account is active. If you delete your account, we permanently delete your personal data within 30 days, except where we are required to retain it by law (such as billing records, which we keep for 7 years for tax compliance). Workspace content you created may persist until the workspace owner deletes it.`,
  },
  {
    title: "6. Your rights",
    content: `Depending on your location, you may have the right to: access a copy of the personal data we hold about you; correct inaccurate data; request deletion of your data ("right to be forgotten"); object to or restrict certain processing; data portability (receive your data in a machine-readable format). To exercise any of these rights, contact us at hello@devcollab.io. We will respond within 30 days.`,
  },
  {
    title: "7. Security",
    content: `We protect your data using industry-standard measures: all data is encrypted in transit (TLS 1.3) and at rest; passwords are hashed using bcrypt with a cost factor of 12; JWT tokens are signed with a secret key and expire after 7 days; we enforce rate limiting on authentication endpoints to prevent brute-force attacks. No method of transmission is 100% secure, but we take reasonable steps to protect your information.`,
  },
  {
    title: "8. Children's privacy",
    content: `DevCollab is not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
  },
  {
    title: "9. Third-party links",
    content: `Our Service may contain links to third-party websites or integrations. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "10. Changes to this policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification at least 14 days before they take effect. The "Last updated" date at the top reflects the most recent revision. Continued use of the Service after the effective date constitutes your acceptance of the updated policy.`,
  },
  {
    title: "11. Contact",
    content: `If you have questions or concerns about this Privacy Policy or how we handle your data, please contact our privacy team at hello@devcollab.io. We take privacy concerns seriously and will respond within 5 business days.`,
  },
];

const PrivacyPolicy = () => {
  return (
        <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/40 px-6 lg:px-16 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h2 className='text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-7xl font-semibold bg-linear-to-r from-primary! via-secondary! to-secondary! bg-clip-text! text-transparent! 2xl:leading-15 4xl:leading-21'>
            Privacy Policy
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 14, 2026 · Effective: June 14, 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Your privacy matters to us. This policy explains what data we collect,
            why we collect it, and how you can control it.
          </p>
        </div>
      </section>
 
      {/* Content */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Sections
              </p>
              {sections.map((s) => (
                <a
                  key={s.title}
                  href={`#${s.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="block truncate py-0.5 text-xs text-muted-foreground hover:text-primary"
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
 
            <div className="border-t border-border pt-8">
              <p className="text-xs text-muted-foreground">
                Have questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                · View our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy