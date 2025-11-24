'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React.js', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Node.js', 'Express.js'];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-900">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
