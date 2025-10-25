"use client";
import { useEffect } from "react";
import About from "../components/About";
import Achivement from "../components/Achivement";
import BoardoffDirectore from "../components/BoardoffDirectore";
import Clintimage from "../components/Clintimage";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      // Define sections and their corresponding navbar items
      const sections = [
        { id: 'about', top: 0 },
        { id: 'achievement', top: 0 },
        { id: 'boardofdirectore', top: 0 },
        { id: 'clintimage', top: 0 }
      ];
      
      // Calculate section positions
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          section.top = element.offsetTop;
        }
      });
      
      // Find current section
      const scrollPosition = window.scrollY + 100;
      let currentSection = sections[0].id; // default to first section
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          currentSection = sections[i].id;
          break;
        }
      }
      
      // Update hash in URL without scrolling
      if (window.location.hash.substring(1) !== currentSection) {
        window.history.replaceState(null, '', `#${currentSection}`);
      }
    };

    // Initial calculation
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <About />
      <Achivement />
      <BoardoffDirectore />
      <Clintimage />
    </div>
  );
}