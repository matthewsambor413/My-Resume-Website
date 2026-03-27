"use client";

import { useState } from "react";
import { siteContent } from "@/lib/data/content";

export function Contact() {
  const { email } = siteContent;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — wire to a service like Resend or Formspree when ready
    if (form.name && form.email && form.message) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2";
  const inputStyle = {
    backgroundColor: "var(--navy)",
    border: "1.5px solid rgba(223,208,184,0.15)",
    color: "var(--cream)",
    fontFamily: "var(--font-public-sans)",
  };
  const inputFocusStyle = { "--tw-ring-color": "var(--teal)" } as React.CSSProperties;

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: copy */}
          <div className="flex flex-col justify-center">
            <span className="section-label">Contact</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 leading-tight"
              style={{ color: "var(--cream)", fontFamily: "var(--font-red-rose)" }}
            >
              Get in Touch
            </h2>
            <p
              className="mt-5 text-base leading-relaxed max-w-md"
              style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
            >
              Want to hear more about how I can help your project succeed? Send
              me a message or connect directly via email.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-opacity-20"
                style={{ backgroundColor: "rgba(59,151,151,0.3)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 3h12v9H1V3zm0 0l6 5 6-5"
                    stroke="var(--teal)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {email}
            </a>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: "var(--blush)", border: "1px solid rgba(59,151,151,0.4)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(59,151,151,0.3)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="var(--teal)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "var(--cream)", fontFamily: "var(--font-red-rose)" }}
                >
                  Message sent!
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--gray)", fontFamily: "var(--font-public-sans)" }}
                >
                  Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    className="text-xs font-semibold tracking-wider uppercase block mb-1.5"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
                <div>
                  <label
                    className="text-xs font-semibold tracking-wider uppercase block mb-1.5"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
                <div>
                  <label
                    className="text-xs font-semibold tracking-wider uppercase block mb-1.5"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-none`}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-[0.99]"
                  style={{
                    backgroundColor: "var(--navy)",
                    color: "white",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
