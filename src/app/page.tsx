"use client";
import { useEffect, useRef } from "react";
import About from "../components/History";
import Achivement from "../components/Profile";
import BoardoffDirectore from "../components/Plant&Machinery";
import Clintimage from "../components/FinancialData";
import Project from "../components/Project";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  const aboutRef = useRef(null);
  const achievementRef = useRef(null);
  const contactRef = useRef(null);
  const boardRef = useRef(null);
  const financialRef = useRef(null);
  const projectRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Define sections and their corresponding navbar items in the visual order
      const sections = [
        { id: 'about', top: 0 },
        { id: 'project', top: 0 },
        { id: 'boardofdirectore', top: 0 },
        { id: 'financial', top: 0 },
        { id: 'achievement', top: 0 },
        { id: 'gallery', top: 0 },
        { id: 'contact', top: 0 },
      ];

      // Calculate section positions
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          section.top = element.offsetTop;
        }
      });

      // Find current section
      const scrollPosition = window.scrollY + 150; // Offset for navbar
      let currentSection = sections[0].id;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top && sections[i].top > 0) {
          currentSection = sections[i].id;
          break;
        }
      }

      // Only update hash if it's significantly different to avoid jumping
      // or better yet, don't update hash on scroll to keep URL clean, just let Navbar handle active state via props if needed
      // But since Navbar uses pathname/hash, we'll leave it be for now or rely on the Navbar's self-determination keying off ID?
      // The Navbar component I wrote uses `pathname === href`. 
      // If href is `/#about`, then pathname is `/`. 
      // The previous Navbar logic relied on Next.js routing. 
      // Let's ensure the IDs here match the IDs expected by any scroll-spy if it exists.
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    [aboutRef, projectRef, boardRef, financialRef, achievementRef, galleryRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current as Element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* 
         Structure:
         1. About (History) - Acts as Intro/Hero
         2. Projects
         3. Plant & Machinery
         4. Financial Data
         5. Achievements (Profile)
         6. Gallery
         7. Contact
      */}

      <div id="about" ref={aboutRef} className="slide-in-section">
        <About />
      </div>

      <div id="project" ref={projectRef} className="slide-in-section">
        <Project />
      </div>

      <div id="boardofdirectore" ref={boardRef} className="slide-in-section">
        <BoardoffDirectore />
      </div>

      <div id="financial" ref={financialRef} className="slide-in-section">
        <Clintimage />
      </div>

      <div id="achievement" ref={achievementRef} className="slide-in-section">
        <Achivement />
      </div>

      <div id="gallery" ref={galleryRef} className="slide-in-section">
        <Gallery />
      </div>

      <div id="contact" ref={contactRef} className="slide-in-section">
        <Contact />
      </div>
    </div>
  );
}