import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeBackground from "./components/ThreeBackground";

export default function Page() {
  return (
    <main className="relative w-full h-screen bg-black text-white">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
