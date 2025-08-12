'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logofinovai.png"
            alt="FinovAI Labs Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-extrabold text-gray-900 dark:text-white">
            FinovAI Labs
          </span>
        </Link>

        {/* Desktop Links */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/ai-tool" onClick={() => setMenuOpen(false)}>AI Tool</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
