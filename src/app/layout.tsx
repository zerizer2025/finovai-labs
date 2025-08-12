import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 text-gray-700 dark:text-gray-200">
            © {new Date().getFullYear()} FinovAI Labs. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
