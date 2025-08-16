// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold">About Us</h1>

      <p className="mt-4 text-lg">
        At <strong>FinovAI Labs</strong>, our mission is to empower businesses and
        entrepreneurs across the globe with AI-powered financial tools and
        services that simplify complex processes, enhance decision-making, and
        fuel sustainable growth.
      </p>

      <p className="mt-4 text-lg">
        Our vision is to be the world’s most trusted partner in AI-driven
        finance, pioneering solutions that democratize advanced analytics and
        transform how organizations manage and scale their financial operations.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            Empowering businesses with AI tools that simplify and accelerate
            financial management.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            Becoming the most trusted global partner in AI-powered finance.
          </p>
        </div>
      </div>
    </main>
  );
}
