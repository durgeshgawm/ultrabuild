"use client";
import { useEffect } from "react";
import Project from "../../components/Project";

export default function ProjectPage() {
  useEffect(() => {
    // Trigger animation on page load
    const element = document.querySelector(".slide-in-top");
    if (element) {
      // Add the animate class after a small delay to ensure DOM is ready
      setTimeout(() => {
        element.classList.add("slide-in-top-animate");
      }, 10);
    }
  }, []);

  return (
    <div className="min-h-screen slide-in-top">
      <Project />
    </div>
  );
}