import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arup Saha | Full Stack Developer",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Arup,s Portfolio
              </Link>

              <div className="flex items-center gap-4">
                <Navbar/>
              </div>

            </div>
          </div>
        </nav>

        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}