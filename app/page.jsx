// app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ThreeBackground from "../components/ThreeBackground";

export default function HomePage() {
  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
