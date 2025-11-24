import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="fake-avatar mb-6"></div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold glow text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I Build Cinematic Interfaces
      </motion.h1>

      <motion.p
        className="mt-4 text-center text-lg opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Heavy animations • Full 3D • Ultra Visual Portfolio
      </motion.p>
    </section>
  );
}
