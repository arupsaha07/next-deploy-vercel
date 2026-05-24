import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Hi, I'm Arup Saha
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            I build modern web applications using React, Next.js,
            TypeScript, Node.js, Tailwind CSS, and AI-powered tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}