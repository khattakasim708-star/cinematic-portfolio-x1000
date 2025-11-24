import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeBackground from "./components/ThreeBackground";

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
