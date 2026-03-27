import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  label: string;
  description: string;
  image: string;
  href: string;
  index: number;
}

export function ProjectCard({
  title,
  label,
  description,
  image,
  href,
  index,
}: ProjectCardProps) {
  return (
    <article
      className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundColor: "#222831",
        border: "1px solid rgba(223,208,184,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Index badge */}
        <div
          className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: "var(--navy)",
            color: "white",
            fontFamily: "var(--font-red-rose)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <span
          className="section-label text-[10px]"
          style={{ color: "var(--teal)" }}
        >
          {label}
        </span>
        <h3
          className="text-2xl font-bold mt-2 mb-3 leading-tight"
          style={{ color: "var(--cream)", fontFamily: "var(--font-red-rose)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
        >
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link"
          style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
        >
          See Full Case Study
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
