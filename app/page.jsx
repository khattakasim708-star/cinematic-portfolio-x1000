import React from 'react'; // Make sure React is imported
import dynamic from 'next/dynamic';

// Import components dynamically to prevent SSR issues with DOM usage
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const Skills = dynamic(() => import('./components/Skills'), { ssr: false });
const Projects = dynamic(() => import('./components/Projects'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
