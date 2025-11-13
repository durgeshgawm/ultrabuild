"use client";
import { useEffect } from "react";
import BoardoffDirectore from "../../components/Plant&Machinery";

export default function BoardofdirectorePage() {
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
      <BoardoffDirectore />
    </div>
  );
}