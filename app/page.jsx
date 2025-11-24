"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Dynamically import ThreeBackground so it doesn't run on the server
const ThreeBackground = dynamic(
  () => import("./components/ThreeBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative w-full h-full min-h-screen">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
