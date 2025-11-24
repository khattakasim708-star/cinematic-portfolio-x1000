import { motion } from 'framer-motion';

const skills = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'TypeScript'];

export default function Skills() {
  return (
    <section id="skills" className="section bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
