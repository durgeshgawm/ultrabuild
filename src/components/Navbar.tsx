"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Updated menu items with renamed links and smooth scrolling for home page sections
  const menuItems = [
    { name: "History", href: "/about", id: "about" },
    { name: "Profile", href: "/achievement", id: "achievement" },
    { name: "Plant & Machinery", href: "/boardofdirectore", id: "boardofdirectore" },
    { name: "Financial Data", href: "/clintimage", id: "financial" },
    { name: "Project", href: "/project" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  // Close menus when pathname changes
  useEffect(() => {
    setMenuOpen(false);
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

  // Handle smooth scrolling for same-page navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    // Only apply smooth scrolling on the home page for section links
    if (isHomePage && id) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth"
        });
        // Update URL hash without page reload
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

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
                ? activeSection === item.id
                : pathname === item.href;
              
              // Check if this is a section link that should use smooth scrolling
              const isSectionLink = isHomePage && item.id;
              
              return (
                <Link
                  key={i}
                  href={isSectionLink ? `/#${item.id}` : item.href}
                  onClick={(e) => isSectionLink && handleSmoothScroll(e, item.id)}
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
                ? activeSection === item.id
                : pathname === item.href;
              
              // Check if this is a section link that should use smooth scrolling
              const isSectionLink = isHomePage && item.id;
              
              return (
                <Link
                  key={i}
                  href={isSectionLink ? `/#${item.id}` : item.href}
                  onClick={(e) => {
                    if (isSectionLink) {
                      handleSmoothScroll(e, item.id);
                    }
                  }}
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