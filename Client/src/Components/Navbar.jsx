"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200 shadow-sm mb-8">
      <div className="w-full px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between h-30">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Tech Challenges Logo"
                className="h-26 ml-2 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="/about"
              className="text-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              About us
            </a>
            <a
              href="/projects"
              className="text-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="/services"
              className="text-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Our services
            </a>
            <a
              href="/contact"
              className="text-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Reach us
            </a>
            <div className="flex items-center border-l pl-4 ml-4 border-gray-600">
              <button className="flex items-center text-secondary hover:text-blue-500 transition-colors">
                <span className="mr-1">🇬🇧</span>
                <span className="text-sm font-medium">English</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              About us
            </a>
            <a
              href="/projects"
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              Projects
            </a>
            <a
              href="/services"
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              Our services
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              Reach us
            </a>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <button className="flex items-center px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors">
                <span className="mr-2">🇬🇧</span>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}