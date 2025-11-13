"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Updated menu items - all navigate to individual pages
  const menuItems = [
    { name: "History", href: "/about", isSection: false },
    { name: "Profile", href: "/achievement", isSection: false },
    { name: "Plant & Machinery", href: "/boardofdirectore", isSection: false },
    { name: "Financial Data", href: "/clintimage", isSection: false },
    { name: "Project", href: "/project", isSection: false },
    { name: "Gallery", href: "/gallery", isSection: false },
    { name: "Contact", href: "/contact", isSection: false },
  ];

  // Close menus when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Determine if we're on the home page
  const isHomePage = pathname === "/";

  // Handle navigation for all pages
  const handleNavigation = () => {
    // No special handling needed since all items are page links now
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/30 dark:border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 slide-in-left">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">UB</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              UltraBuild
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 staggered-slide-top">
            {menuItems.map((item, i) => {
              // For all pages, check direct pathname match
              const isActive = pathname === item.href || (pathname === '/' + item.href.slice(1) && item.href !== '/');
              
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none slide-in-right"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col py-4 max-h-[calc(100vh-5rem)] overflow-y-auto staggered-slide-left">
            {menuItems.map((item, i) => {
              // For all pages, check direct pathname match
              const isActive = pathname === item.href || (pathname === '/' + item.href.slice(1) && item.href !== '/');
              
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}