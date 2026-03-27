"use client";

import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";
import { siteContent } from "@/lib/data/content";

export function Hero() {
  const { hero, name, headshot, email, linkedIn, resumeUrl } = siteContent;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Background mesh */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 50%, rgba(59,151,151,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 80% 20%, rgba(57,62,70,0.5) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <span className="section-label fade-up fade-up-delay-1">
              Founding Product Manager
            </span>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight fade-up fade-up-delay-2"
              style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
            >
              {hero.headline.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-md fade-up fade-up-delay-3"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-public-sans)" }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 fade-up fade-up-delay-4">
              <Link
                href={hero.cta1.href}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[0.98]"
                style={{
                  backgroundColor: "var(--teal)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {hero.cta1.label}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                Download Resume
              </a>

              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-[var(--cream)] hover:text-[var(--navy)]"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {/* LinkedIn icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="flex gap-8 pt-5 fade-up fade-up-delay-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {[
                { value: "28×", label: "User Growth" },
                { value: "400+", label: "Schools" },
                { value: "18mo", label: "Timeline" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--teal)", fontFamily: "var(--font-red-rose)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: ProfileCard */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 fade-up fade-up-delay-2">
            <ProfileCard
              avatarUrl={headshot}
              name={name}
              title="Founding Product Manager"
              handle="samborpm"
              status="Open to Opportunities"
              contactText="Get in Touch"
              behindGlowColor="rgba(59, 151, 151, 0.55)"
              behindGlowSize="55%"
              innerGradient="linear-gradient(145deg, rgba(57,62,70,0.55) 0%, rgba(59,151,151,0.3) 100%)"
              enableTilt={true}
              onContactClick={scrollToContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
