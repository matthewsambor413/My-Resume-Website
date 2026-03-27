import { siteContent } from "@/lib/data/content";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      className="py-24"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="section-label"
            style={{ color: "var(--teal)" }}
          >
            What They Say
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
          >
            Built on Trust
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl leading-none font-bold select-none"
                style={{ color: "var(--teal)", fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed flex-1 -mt-4"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p
                  className="font-semibold text-sm"
                  style={{ color: "white", fontFamily: "var(--font-public-sans)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
