"use client";
import { useEffect } from "react";
import Contact from "../../components/Contact";

export default function ContactPage() {
  useEffect(() => {
    // Trigger animation on page load
    const element = document.querySelector(".slide-in-left");
    if (element) {
      // Add the animate class after a small delay to ensure DOM is ready
      setTimeout(() => {
        element.classList.add("slide-in-left-animate");
      }, 10);
    }
  }, []);

  return (
    <div className="min-h-screen slide-in-left">
      <Contact />
    </div>
  );
}