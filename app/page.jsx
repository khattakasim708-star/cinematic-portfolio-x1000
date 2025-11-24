"use client";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
