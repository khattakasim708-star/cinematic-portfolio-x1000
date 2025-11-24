import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeBackground from "./components/ThreeBackground";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
