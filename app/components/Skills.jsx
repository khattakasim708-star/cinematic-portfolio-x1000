"use client";

import React from "react";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Three.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Vercel / Netlify",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent animate-fadeIn">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="bg-gray-800 p-6 rounded-xl shadow-xl flex justify-center items-center text-xl font-semibold text-white transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-gradientStart hover:to-gradientEnd hover:text-black animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
