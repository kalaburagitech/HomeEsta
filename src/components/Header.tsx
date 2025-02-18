"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-green-500">
          HomeEsta
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-300 hover:text-white">
            ABOUT
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-white">
            FEATURE
          </Link>
          <Link href="/fees" className="text-gray-300 hover:text-white">
            FEES
          </Link>
          <Link href="/faqs" className="text-gray-300 hover:text-white">
            FAQS
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            CONTACT
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              LOGIN
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
              GET STARTED
            </Button>
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white py-2"
              onClick={closeMenu}
            >
              ABOUT
            </Link>
            <Link
              href="/features"
              className="text-gray-300 hover:text-white py-2"
              onClick={closeMenu}
            >
              FEATURE
            </Link>
            <Link
              href="/fees"
              className="text-gray-300 hover:text-white py-2"
              onClick={closeMenu}
            >
              FEES
            </Link>
            <Link
              href="/faqs"
              className="text-gray-300 hover:text-white py-2"
              onClick={closeMenu}
            >
              FAQS
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white py-2"
              onClick={closeMenu}
            >
              CONTACT
            </Link>
            <Link
              href="/login"
              className="w-full px-4 py-2"
              onClick={closeMenu}
            >
              <Button
                variant="ghost"
                className="w-full text-gray-300 hover:text-white"
              >
                LOGIN
              </Button>
            </Link>
            <Link
              href="/register"
              className="w-full px-4 py-2"
              onClick={closeMenu}
            >
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white">
                GET STARTED
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
