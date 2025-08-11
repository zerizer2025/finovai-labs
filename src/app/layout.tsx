import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '../components/ThemeToggle';

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
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navigation Bar */}
          <nav className="bg-gray-100 dark:bg-gray-800 shadow-md px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
              
              {/* Logo + Brand Name */}
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logofinovai.png" alt="FinovAI Labs Logo" width={50} height={50}/>
                <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  FinovAI Labs
                </span>
              </Link>

              {/* Links */}
              <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/ai-tool">AI Tool</Link>
                <Link href="/contact">Contact</Link>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link
                  href="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Login
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 text-gray-700 dark:text-gray-200">
            © {new Date().getFullYear()} FinovAI Labs. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
