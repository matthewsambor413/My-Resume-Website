import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export function Resume() {
  const { experience, education, skills, leadership, resumeUrl } = siteContent;

  return (
    <section id="resume" style={{ backgroundColor: "var(--blush)" }} className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Experience</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3"
              style={{ color: "#37353E", fontFamily: "var(--font-red-rose)" }}
            >
              Where I&rsquo;ve Built
            </h2>
          </div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[0.98] shrink-0"
            style={{
              backgroundColor: "var(--navy)",
              color: "white",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div
              className="relative pl-8"
              style={{ borderLeft: "2px solid var(--teal)" }}
            >
              {experience.map((job, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4"
                    style={{
                      backgroundColor: "var(--teal)",
                      borderColor: "var(--blush)",
                    }}
                  />

                  {/* Dates */}
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-1.5"
                    style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {job.dates}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ color: "#37353E", fontFamily: "var(--font-red-rose)" }}
                  >
                    {job.title}
                  </h3>

                  {/* Company */}
                  <p
                    className="text-sm font-semibold mt-0.5 mb-2"
                    style={{ color: "#44444E", fontFamily: "var(--font-public-sans)" }}
                  >
                    {job.company}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Education + Skills + Leadership */}
          <div className="flex flex-col gap-10">
            {/* Education */}
            <div>
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
              >
                Education
              </h3>
              {education.map((edu, i) => (
                <div key={i}>
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-1"
                    style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {edu.years}
                  </p>
                  <p
                    className="font-bold"
                    style={{ color: "#37353E", fontFamily: "var(--font-red-rose)" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    className="text-sm font-medium mt-0.5"
                    style={{ color: "#37353E", fontFamily: "var(--font-public-sans)" }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
              >
                Key Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      color: "#37353E",
                      borderColor: "var(--teal)",
                      backgroundColor: "rgba(59,151,151,0.2)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
              >
                Leadership
              </h3>
              <ul className="flex flex-col gap-2">
                {leadership.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
                  >
                    <span style={{ color: "var(--teal)" }} className="mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
