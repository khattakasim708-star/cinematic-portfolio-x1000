"use client";

import React from "react";

const projects = [
  {
    name: "Cinematic Portfolio X1000",
    description: "A fully animated portfolio using Next.js, Tailwind, and Three.js.",
    link: "#",
  },
  {
    name: "AI Homework Helper",
    description: "An AI-powered homework helper with interactive UI.",
    link: "#",
  },
  {
    name: "WhatsApp Clone",
    description: "Real-time chat app using Next.js and Firebase.",
    link: "#",
  },
  {
    name: "E-commerce Dashboard",
    description: "A modern dashboard for e-commerce analytics with Next.js.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-950 text-white flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent animate-fadeIn">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-8 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
              {project.name}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
