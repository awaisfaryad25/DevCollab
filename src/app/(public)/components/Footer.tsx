// components/footer/Footer.tsx
import Link from "next/link";
import { ThemeToggle } from "@/app/ui/theme-toggle";
import SocialLinks from "./SocialLinks";
import MainLogo from "./MainLogo";
import Newsletter from "./NewsLetter";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Cookie policy", href: "/cookies" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t border-border px-4 pt-16 pb-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <MainLogo/>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Real-time project management for software teams. Ship faster,
              together.
            </p>

            <SocialLinks/>
            <div className="mt-4">
              <Newsletter/>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-4 text-sm font-semibold">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-text hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} DevCollab. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;