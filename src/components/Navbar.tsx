"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Achievement", href: "/achievement" },
    { name: "Board of Directors", href: "/boardofdirectore" },
    { name: "Clients", href: "/clintimage" },
    { name: "Contact", href: "/contact" },
  ];

  const dropdownItems = [
    { name: "Team", href: "/team" },
    { name: "Strength", href: "/strenth" },
    { name: "Sector Operator", href: "/sectoroprater" },
    { name: "Gallery", href: "/gallery" },
    { name: "Financial Data", href: "/financialdata" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus when pathname changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Get active section from hash for home page
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === "/") {
        const hash = window.location.hash.replace("#", "");
        setActiveSection(hash);
      }
    };
    
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  // Determine if we're on the home page
  const isHomePage = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/30 dark:border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">UB</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              UltraBuild
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, i) => {
              // For home page, check active section from hash
              // For other pages, check direct pathname match
              const isActive = isHomePage 
                ? activeSection === item.href.substring(1) // Remove leading slash
                : pathname === item.href;
              
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  dropdownOpen || dropdownItems.some(item => pathname === item.href)
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                Other 
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                {(dropdownOpen || dropdownItems.some(item => pathname === item.href)) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                  {dropdownItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-colors relative ${
                          isActive
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {menuItems.map((item, i) => {
              // For home page, check active section from hash
              // For other pages, check direct pathname match
              const isActive = isHomePage 
                ? activeSection === item.href.substring(1) // Remove leading slash
                : pathname === item.href;
              
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
            {/* Dropdown for Mobile */}
            <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-800">
              <details className="w-full">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-3 flex justify-between items-center">
                  Other
                  <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="flex flex-col mt-2 space-y-2 pl-4">
                  {dropdownItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        className={`text-sm py-2.5 transition-colors relative ${
                          isActive
                            ? "text-indigo-600 dark:text-indigo-400 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}