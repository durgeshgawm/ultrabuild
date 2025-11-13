"use client";
import { useEffect } from "react";
import Gallery from "../../components/Gallery";

export default function GalleryPage() {
  useEffect(() => {
    // Trigger animation on page load
    const element = document.querySelector(".slide-in-right");
    if (element) {
      // Add the animate class after a small delay to ensure DOM is ready
      setTimeout(() => {
        element.classList.add("slide-in-right-animate");
      }, 10);
    }
  }, []);

  return (
    <div className="min-h-screen slide-in-right">
      <Gallery />
    </div>
  );
}