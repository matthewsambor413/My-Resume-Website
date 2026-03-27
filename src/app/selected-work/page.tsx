import { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/selected-work/ProjectCard";
import { siteContent } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Selected Work — Matthew Sambor",
  description:
    "Case studies showcasing product management, AI-assisted development, and end-to-end product delivery.",
};

export default function SelectedWorkPage() {
  const { selectedWork } = siteContent;

  return (
    <div className="pt-16">
      {/* Page header */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label" style={{ color: "var(--teal)" }}>
            Portfolio
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold mt-3 leading-tight"
            style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
          >
            Selected Work
          </h1>
          <p
            className="mt-6 text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-public-sans)" }}
          >
            End-to-end case studies — from problem identification to shipped product.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-20 bg-[#222831]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWork.map((project, i) => (
              <ProjectCard
                key={project.slug}
                index={i}
                title={project.title}
                label={project.label}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA back home */}
      <section className="py-16" style={{ backgroundColor: "var(--blush)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xl font-bold"
              style={{ color: "#44444E", fontFamily: "var(--font-red-rose)" }}
            >
              Interested in working together?
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
            >
              I&rsquo;m currently looking for my next opportunity.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 shrink-0"
            style={{
              backgroundColor: "var(--navy)",
              color: "white",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
