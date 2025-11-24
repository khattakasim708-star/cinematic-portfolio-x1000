"use client";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent animate-fadeIn">
        Hi, I'm Asim
      </h1>
      <p className="mt-4 text-2xl text-white animate-fadeIn delay-200">
        I create cinematic portfolios with Next.js & Three.js
      </p>
      <div className="mt-8 flex gap-4 animate-float">
        <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-full text-black font-semibold shadow-lg hover:scale-105 transition-transform">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border-2 border-gradientStart rounded-full text-gradientStart font-semibold hover:bg-gradient-to-r hover:from-gradientStart hover:to-gradientEnd hover:text-black transition-all">
          Contact Me
        </a>
      </div>
    </section>
  );
}
