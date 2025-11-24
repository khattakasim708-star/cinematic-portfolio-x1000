import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl glow text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((n) => (
          <motion.div
            key={n}
            className="h-64 rounded-xl bg-gradient-to-br from-neon to-blue-600 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 text-black text-xl font-bold">
              Cinematic Project {n}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
