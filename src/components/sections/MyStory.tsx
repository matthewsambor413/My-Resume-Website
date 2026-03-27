"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { siteContent } from "@/lib/data/content";
import { ScrollStackItem } from "@/components/ScrollStack";

const ScrollStack = dynamic(() => import("@/components/ScrollStack"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "100vh" }} />,
});

type Chapter = (typeof siteContent.story.chapters)[number];

function getContentWordCount(chapter: Chapter): number {
  let words = chapter.body.split(/\s+/).length;
  if (chapter.bullets) {
    words += chapter.bullets.reduce((acc, b) => acc + b.text.split(/\s+/).length, 0);
  }
  if (chapter.quote) {
    words += chapter.quote.text.split(/\s+/).length;
  }
  if ("preQuote" in chapter && chapter.preQuote) {
    words += chapter.preQuote.body.split(/\s+/).length;
  }
  return words;
}

// Returns Tailwind class strings for heading and body based on content density
function getFontClasses(chapter: Chapter) {
  const words = getContentWordCount(chapter);
  if (words < 60) {
    return { heading: "text-4xl md:text-5xl", body: "text-base md:text-lg" };
  }
  if (words < 100) {
    return { heading: "text-3xl md:text-4xl", body: "text-sm md:text-base" };
  }
  if (words < 150) {
    return { heading: "text-2xl md:text-3xl", body: "text-sm" };
  }
  return { heading: "text-xl md:text-2xl", body: "text-xs md:text-sm" };
}

export function MyStory() {
  const { story } = siteContent;

  return (
    <section id="story">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-6">
        <span className="section-label">{story.label}</span>
        <h2
          className="text-4xl md:text-5xl font-bold mt-3"
          style={{ color: "var(--cream)", fontFamily: "var(--font-red-rose)" }}
        >
          The Origins: Curiosity, Creation, &amp; Competition
        </h2>
      </div>

      {/* ScrollStack — part of the main page scroll */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={80}
        itemScale={0.03}
        itemStackDistance={24}
        stackPosition="15%"
        scaleEndPosition="8%"
        baseScale={0.86}
      >
        {story.chapters.map((chapter, index) => {
          const imageOnRight = index % 2 === 0;
          const { heading: headingClass, body: bodyClass } = getFontClasses(chapter);
          return (
            <ScrollStackItem
              key={chapter.title}
              itemClassName="!p-0 !h-auto !min-h-[min(88vh,700px)] !rounded-[32px]"
            >
              <div
                className={`relative w-full rounded-[32px] overflow-hidden flex flex-col ${imageOnRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ minHeight: "min(88vh, 700px)", backgroundColor: "var(--navy)" }}
              >
                {/* Text panel — vertically centered */}
                <div className="flex flex-col justify-center p-8 md:p-12 md:w-[58%]">
                  {/* Group label */}
                  {chapter.groupLabel && (
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                      style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                    >
                      {chapter.groupLabel}
                    </span>
                  )}

                  <h3
                    className={`${headingClass} font-bold mb-4 leading-tight`}
                    style={{ color: "white", fontFamily: "var(--font-red-rose)" }}
                  >
                    {chapter.title}
                  </h3>

                  {chapter.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className={`${bodyClass} leading-relaxed mb-3`}
                      style={{
                        color: "rgba(223,208,184,0.9)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {chapter.bullets && (
                    <ul className="mt-3 space-y-2">
                      {chapter.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className={`${bodyClass} leading-relaxed flex gap-2`}
                          style={{
                            color: "rgba(223,208,184,0.85)",
                            fontFamily: "var(--font-public-sans)",
                          }}
                        >
                          <span
                            className="mt-0.5 shrink-0 text-xs font-bold"
                            style={{ color: "var(--teal)" }}
                          >
                            →
                          </span>
                          <span>
                            {bullet.label && (
                              <span className="font-semibold" style={{ color: "white" }}>
                                {bullet.label}:{" "}
                              </span>
                            )}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {"preQuote" in chapter && chapter.preQuote && (
                    <div className="mt-4">
                      <p
                        className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                        style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                      >
                        {chapter.preQuote.label}
                      </p>
                      <p
                        className={`${bodyClass} leading-relaxed`}
                        style={{ color: "rgba(223,208,184,0.9)", fontFamily: "var(--font-public-sans)" }}
                      >
                        {chapter.preQuote.body}
                      </p>
                    </div>
                  )}

                  {chapter.quote && (
                    <blockquote
                      className="mt-4 pl-4 py-1"
                      style={{ borderLeft: "3px solid var(--teal)" }}
                    >
                      <p
                        className={`${bodyClass} italic leading-relaxed`}
                        style={{
                          color: "rgba(223,208,184,0.8)",
                          fontFamily: "var(--font-public-sans)",
                        }}
                      >
                        &ldquo;{chapter.quote.text}&rdquo;
                      </p>
                      <cite
                        className="block mt-2 text-xs not-italic font-semibold"
                        style={{ color: "var(--teal)", fontFamily: "var(--font-public-sans)" }}
                      >
                        — {chapter.quote.attribution}
                      </cite>
                    </blockquote>
                  )}
                </div>

                {/* Image panel */}
                <div className="relative w-full h-64 md:h-auto md:w-[42%] shrink-0">
                  <Image
                    src={chapter.image}
                    alt={chapter.title}
                    fill
                    className="object-cover"
                    style={"imageObjectPosition" in chapter && chapter.imageObjectPosition ? { objectPosition: chapter.imageObjectPosition } : undefined}
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}
