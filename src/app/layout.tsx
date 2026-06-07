import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/src/components/Navbar";
import ThemeScript from "@/src/components/ThemeScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arup Saha | Frontend Engineer",
  description:
    "Modern interactive portfolio built with Next.js, React, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen transition-colors duration-300">
        {/* BACKGROUND EFFECTS */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Gradient Orb 1 */}
          <div
            className="
              absolute
              left-[-10rem]
              top-[-10rem]
              h-[25rem]
              w-[25rem]
              rounded-full
              blur-3xl
              bg-[var(--orb-primary)]
            "
          />

          {/* Gradient Orb 2 */}
          <div
            className="
              absolute
              right-[-10rem]
              top-[10rem]
              h-[30rem]
              w-[30rem]
              rounded-full
              blur-3xl
              bg-[var(--orb-secondary)]
            "
          />

          {/* Grid Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)]
              bg-[size:4rem_4rem]
            "
          />
        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="relative flex-1">{children}</main>
      </body>
    </html>
  );
}
