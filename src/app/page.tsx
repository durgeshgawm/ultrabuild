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
      // Define sections and their corresponding navbar items
      const sections = [
        { id: 'about', top: 0 },
        { id: 'achievement', top: 0 },
        { id: 'contact', top: 0 },
        { id: 'boardofdirectore', top: 0 },
        { id: 'financial', top: 0 },
        { id: 'project', top: 0 },
        { id: 'gallery', top: 0 },
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
        if (scrollPosition >= sections[i].top && sections[i].top > 0) {
          currentSection = sections[i].id;
          break;
        }
      }
      
      // Update hash in URL without scrolling, but only if there's already a hash
      // and we have valid section positions
      const hasValidPositions = sections.some(section => section.top > 0);
      if (hasValidPositions && window.location.hash && window.location.hash.substring(1) !== currentSection) {
        window.history.replaceState(null, '', `#${currentSection}`);
      }
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
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add specific animation class based on the element
          const element = entry.target as HTMLElement;
          if (element.classList.contains('slide-in-top')) {
            element.classList.add('slide-in-top-animate');
          } else if (element.classList.contains('slide-in-left')) {
            element.classList.add('slide-in-left-animate');
          } else if (element.classList.contains('slide-in-right')) {
            element.classList.add('slide-in-right-animate');
          } else if (element.classList.contains('slide-in-bottom')) {
            element.classList.add('slide-in-bottom-animate');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (achievementRef.current) observer.observe(achievementRef.current);
    if (boardRef.current) observer.observe(boardRef.current);
    if (financialRef.current) observer.observe(financialRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup observer
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (achievementRef.current) observer.unobserve(achievementRef.current);
      if (boardRef.current) observer.unobserve(boardRef.current);
      if (financialRef.current) observer.unobserve(financialRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div ref={aboutRef} className="slide-in-top">
        <About />
      </div>
      <div ref={achievementRef} className="slide-in-left">
        <Achivement />
      </div>
      <div ref={contactRef} className="slide-in-right">
        <Contact />
      </div>
      <div ref={boardRef} className="slide-in-right">
        <BoardoffDirectore />
      </div>
      <div ref={financialRef} className="slide-in-bottom">
        <Clintimage />
      </div>
      <div ref={projectRef} className="slide-in-top">
        <Project />
      </div>
      <div ref={galleryRef} className="slide-in-left">
        <Gallery />
      </div>
    </div>
  );
}