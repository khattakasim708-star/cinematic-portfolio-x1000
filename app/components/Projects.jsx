'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: 'Portfolio Website', description: 'Cinematic portfolio built with Next.js', link: '#' },
  { name: 'E-commerce Store', description: 'Full-stack online store with payments', link: '#' },
  { name: 'Chat App', description: 'Real-time chat application using Socket.io', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
