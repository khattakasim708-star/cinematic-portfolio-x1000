import { motion } from 'framer-motion';

const projects = [
  { title: 'Cinematic Portfolio', description: 'Interactive portfolio website', link: '#' },
  { title: 'AI Homework Helper', description: 'Smart AI app with animations', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-black">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-72"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
