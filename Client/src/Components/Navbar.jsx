"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
  ];

  const currentLang = languages.find((l) => l.code === selectedLang);

  const handleLangSelect = (code) => {
    setSelectedLang(code);
    setIsLangOpen(false);
    // Optional: trigger actual language change logic here
  };

  return (
    <nav className="bg-gray-200 shadow-sm mb-8">
      <div className="w-full px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex items-center w-[15rem]">
            <a href="/" className="flex-shrink-0 w-full items-center">
              <img
                src={logo}
                alt="Tech Challenges Logo"
                className="h-full w-full ml-2 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {["about", "projects", "services", "contact"].map((path) => (
              <a
                key={path}
                href={`/${path}`}
                className="text-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {path === "about"
                  ? "About us"
                  : path === "services"
                  ? "Our services"
                  : path === "contact"
                  ? "Reach us"
                  : "Projects"}
              </a>
            ))}

            {/* Language dropdown */}
            <div className="relative border-l pl-4 ml-4 border-gray-600">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center text-secondary hover:text-blue-500 transition-colors"
              >
                <span className="mr-1">{currentLang.flag}</span>
                <span className="text-sm font-medium">{currentLang.label}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
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
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
          {["about", "projects", "services", "contact"].map((path) => (
            <a
              key={path}
              href={`/${path}`}
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              {path === "about"
                ? "About us"
                : path === "services"
                ? "Our services"
                : path === "contact"
                ? "Reach us"
                : "Projects"}
            </a>
          ))}

          {/* Mobile language dropdown */}
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="mr-2">{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown className="ml-auto w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
