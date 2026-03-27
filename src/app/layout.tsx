import type { Metadata } from "next";
import { Red_Rose, Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Sambor — Product Manager",
  description:
    "Founding Product Manager who scaled a global educational simulation 28x in 18 months. Looking for my next opportunity to have an impact.",
  openGraph: {
    title: "Matthew Sambor — Product Manager",
    description:
      "Founding Product Manager who scaled a global educational simulation 28x in 18 months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${redRose.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#222831]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
