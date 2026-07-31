import Link from "next/link";
 
const sections = [
  {
    title: "What are cookies?",
    content: `Cookies are small text files stored on your device by your web browser when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to site owners. Cookies cannot run programs or deliver viruses to your device.`,
  },
  {
    title: "How we use cookies",
    content: `DevCollab uses cookies only where necessary to operate the platform. We do not use advertising cookies, tracking pixels, or third-party analytics cookies. Our cookies serve one purpose: to keep you logged in and remember your preferences between sessions.`,
  },
  {
    title: "Types of cookies we use",
    content: `Session cookies — temporary cookies that expire when you close your browser. Used to maintain your login session while you use DevCollab. Preference cookies — persistent cookies that remember your settings (such as theme mode: light or dark) so you don't have to set them every time you visit. Authentication cookies — used to verify your identity and maintain secure access to your account.`,
  },
  {
    title: "Cookies we do NOT use",
    content: `We do not use: advertising or remarketing cookies; third-party analytics cookies (such as Google Analytics or Facebook Pixel); cross-site tracking cookies; fingerprinting or device identification technologies. We believe your browsing behavior is your business, not ours.`,
  },
  {
    title: "Managing cookies",
    content: `You can control and delete cookies through your browser settings. Most browsers allow you to: view cookies stored on your device; delete individual or all cookies; block cookies from specific sites or all sites; set preferences for future cookies. Please note that disabling essential cookies may prevent you from logging in or using certain features of DevCollab. Refer to your browser's help documentation for instructions.`,
  },
  {
    title: "Third-party services",
    content: `We use Stripe for payment processing. Stripe may set cookies on your device during the checkout process to prevent fraud and ensure payment security. These cookies are governed by Stripe's own cookie policy and privacy policy, which you can review at stripe.com/privacy.`,
  },
  {
    title: "Changes to this policy",
    content: `We may update this Cookie Policy if we change how we use cookies. We will notify you of any significant changes via email or an in-app notice. The "Last updated" date reflects the most recent revision.`,
  },
  {
    title: "Contact",
    content: `If you have questions about our use of cookies, please contact us at hello@devcollab.io.`,
  },
];

const Cookies = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-muted/40 px-6 lg:px-16 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl 4xl:text-7xl font-semibold bg-linear-to-r from-primary! via-secondary! to-secondary! bg-clip-text! text-transparent! 2xl:leading-15 4xl:leading-21">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 14, 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This policy explains how DevCollab uses cookies and similar
            technologies when you use our platform.
          </p>
        </div>
      </section>
 
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
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
                Also see our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy policy</Link>
                {" "}and{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cookies