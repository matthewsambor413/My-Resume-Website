import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span
            className="text-2xl font-bold"
            style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
          >
            MS.
          </span>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "My Story", href: "/#story" },
              { label: "Resume", href: "/#resume" },
              { label: "Selected Work", href: "/selected-work" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-public-sans)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email */}
          <a
            href={`mailto:${siteContent.email}`}
            className="text-sm transition-opacity hover:opacity-80"
            style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
          >
            {siteContent.email}
          </a>
        </div>

        <div
          className="mt-8 pt-8 text-center text-xs"
          style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          © {new Date().getFullYear()} All Rights Reserved · Matthew Sambor
        </div>
      </div>
    </footer>
  );
}
