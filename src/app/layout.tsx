import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

import Navbar from "@/src/components/Navbar";
import ChatWidget from "../components/chat/ChatWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arup Saha | Frontend Engineer & AI Workflow Specialist",
  description:
    "Frontend engineer with 9+ years turning complex business processes into intelligent, automated software. Built with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#111111] antialiased">
        <ChatWidget />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
