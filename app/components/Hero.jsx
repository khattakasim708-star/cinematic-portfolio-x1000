"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const el = document.getElementById("hero-text");
    if (el) {
      el.classList.add("fade-in");
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-blue-800">
      <h1
        id="hero-text"
        className="text-6xl font-bold opacity-0 transition-opacity duration-1000"
      >
        Cinematic Portfolio
      </h1>
    </section>
  );
}
