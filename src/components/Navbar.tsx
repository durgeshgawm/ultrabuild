"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated menu items
  const menuItems = [
    { name: "Home", href: "/", isSection: false }, // Explicit Home link
    { name: "About", href: "/about", isSection: false },
    { name: "Projects", href: "/project", isSection: false },
    { name: "Plant & Machinery", href: "/boardofdirectore", isSection: false },
    { name: "Achievements", href: "/achievement", isSection: false }, // Renamed from Profile
    { name: "Financials", href: "/clintimage", isSection: false },
    { name: "Gallery", href: "/gallery", isSection: false },
    { name: "Contact", href: "/contact", isSection: false },
  ];

  // Close menus when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm py-2" : "bg-transparent py-4 text-white" // Text white on top if hero is dark, need to handle that. 
        // Actually, let's keep it safe with glass always but transparent initially if we had a hero image. 
        // For now, let's stick to a clean consistent glass look or solid background.
        // Let's go with consistent glass for premium feel.
        } ${!scrolled && "bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"}`}
    >
      {/* 
         Correction: Ideally we want transparent on top of hero, but we haven't seen the hero yet. 
         Let's stick to a refined glass bar that is always visible but subtle.
      */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
        <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/favicoun-logo.jpg"
                alt="UltraBuild Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-accent transition-colors duration-300">
                UltraBuild
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Satna</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href || (pathname === '/' + item.href.slice(1) && item.href !== '/');

              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 nav-link ${isActive
                    ? "text-accent dark:text-accent font-semibold active"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
          <div className="space-y-4">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-2xl font-serif font-medium transition-all duration-300 ${isActive
                    ? "text-accent translate-x-4"
                    : "text-slate-800 dark:text-slate-200 hover:text-accent hover:translate-x-2"
                    }`}
                >
                  <span className="mr-2 text-sm text-slate-300 align-top">0{i + 1}</span>
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center font-bold text-lg shadow-xl"
            >
              Start Your Project
            </Link>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} UltraBuild Satna.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}