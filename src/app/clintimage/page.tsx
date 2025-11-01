"use client";
import { useEffect } from "react";
import Clintimage from "../../components/FinancialData";

export default function ClintimagePage() {
  useEffect(() => {
    // Trigger animation on page load
    const element = document.querySelector(".slide-in-bottom");
    if (element) {
      // Add the animate class after a small delay to ensure DOM is ready
      setTimeout(() => {
        element.classList.add("slide-in-bottom-animate");
      }, 10);
    }
  }, []);

  return (
    <div className="min-h-screen slide-in-bottom">
      <Clintimage />
    </div>
  );
}