import Image from "next/image";
import Link from "next/link";

interface Step {
  number: string;
  tool: string;
  title: string;
  description: string;
  images: string[];
}

interface Result {
  headline: string;
  body: string;
}

interface CaseStudyLayoutProps {
  label: string;
  title: string;
  caseTitle: string;
  challenge: string;
  role: string;
  workflowIntro: string;
  steps: Step[];
  results: Result[];
  finalImages: string[];
  heroImage: string;
  finalImagesFit?: "cover" | "contain";
}

export function CaseStudyLayout({
  label,
  title,
  caseTitle,
  challenge,
  role,
  workflowIntro,
  steps,
  results,
  finalImages,
  heroImage,
  finalImagesFit = "cover",
}: CaseStudyLayoutProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover opacity-25"
              priority
              sizes="100vw"
            />
          </div>
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(68,68,78,0.95) 0%, rgba(68,68,78,0.4) 100%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pb-16 pt-24 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/selected-work"
              className="text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
            >
              ← Selected Work
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-public-sans)" }}
            >
              {title}
            </span>
          </div>

          <span
            className="section-label"
            style={{ color: "var(--teal)" }}
          >
            {label}
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold mt-3 leading-tight max-w-3xl"
            style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
          >
            {caseTitle}
          </h1>
        </div>
      </section>

      {/* Challenge + Role */}
      <section className="py-20 bg-[#222831]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
              >
                The Challenge
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
              >
                {challenge}
              </p>
            </div>
            <div>
              <h2
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
              >
                My Role
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
              >
                {role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ backgroundColor: "var(--blush)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label">The Workflow</span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ color: "#44444E", fontFamily: "var(--font-red-rose)" }}
          >
            How It Got Built
          </h2>
          <p
            className="text-sm mb-12 max-w-xl"
            style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
          >
            {workflowIntro}
          </p>

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-4xl font-bold leading-none"
                      style={{ color: "rgba(68,68,78,0.15)", fontFamily: "var(--font-red-rose)" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--teal)",
                        color: "var(--blush)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {step.tool}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "#44444E", fontFamily: "var(--font-red-rose)" }}
                  >
                    Step {step.number}: {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Images */}
                <div
                  className={`flex flex-col gap-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  {step.images.length > 0 ? (
                    step.images.map((img, j) => (
                      <div
                        key={j}
                        className="relative w-full rounded-2xl overflow-hidden shadow-lg"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <Image
                          src={img}
                          alt={`${step.title} screenshot ${j + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))
                  ) : (
                    <div
                      className="w-full rounded-2xl flex items-center justify-center"
                      style={{
                        aspectRatio: "16/9",
                        backgroundColor: "rgba(20,16,86,0.05)",
                        border: "2px dashed rgba(104,204,209,0.4)",
                      }}
                    >
                      <p
                        className="text-sm opacity-40"
                        style={{ color: "#44444E", fontFamily: "var(--font-public-sans)" }}
                      >
                        AI-generated PRD
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-label" style={{ color: "var(--teal)" }}>
            The Results
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3 mb-12"
            style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
          >
            What It Delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(104,204,209,0.2)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--teal)", fontFamily: "var(--font-red-rose)" }}
                >
                  {result.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-public-sans)" }}
                >
                  {result.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final product screenshots */}
      {finalImages.length > 0 && (
        <section className="py-20 bg-[#222831]">
          <div className="max-w-6xl mx-auto px-6">
            <span className="section-label">Final Product</span>
            <h2
              className="text-3xl font-bold mt-3 mb-10"
              style={{ color: "#44444E", fontFamily: "var(--font-red-rose)" }}
            >
              The Finished Build
            </h2>
            <div
              className={`grid gap-6 ${finalImages.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
            >
              {finalImages.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-2xl overflow-hidden shadow-md"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={img}
                    alt={`Final product screenshot ${i + 1}`}
                    fill
                    className={finalImagesFit === "contain" ? "object-contain" : "object-cover"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--blush)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="/selected-work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--navy)",
              color: "white",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Selected Work
          </Link>
        </div>
      </section>
    </div>
  );
}
