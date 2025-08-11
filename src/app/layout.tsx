import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'FinovAI Labs',
  description: 'AI-powered financial tools and insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="bg-gray-900 text-white px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">FinovAI Labs</Link>
            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/ai-tool">AI Tool</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© {new Date().getFullYear()} FinovAI Labs. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
