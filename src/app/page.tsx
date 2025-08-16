// app/page.tsx
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FinovAI Labs | AI-powered Financial Tools",
  description:
    "Discover FinovAI Labs — AI-driven financial solutions that simplify decision-making and boost your business efficiency.",
  openGraph: {
    title: "FinovAI Labs",
    description:
      "AI-powered financial tools to simplify your business decisions.",
    url: "https://finovai-labs.com",
    siteName: "FinovAI Labs",
    images: [
      {
        url: "logofinovai.png", // ضع صورة داخل public/
        width: 1200,
        height: 630,
        alt: "FinovAI Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinovAI Labs",
    description: "AI-powered financial tools to simplify your business.",
    images: "og-image.jpg",
  },
};

export default function HomePage() {
  return (
    <main className={`p-8 text-center ${roboto.className}`}>
      <header>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to FinovAI Labs
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          AI-powered financial tools to simplify your business decisions.
        </p>
      </header>

      <section className="mt-10">
        <a
          href="/services"
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
        >
          Explore Our Services
        </a>
      </section>
    </main>
  );
}
