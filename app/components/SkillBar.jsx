import { motion } from "framer-motion";

export default function SkillBar({ name, value }) {
  return (
    <div className="w-full my-3">
      <p className="text-lg">{name}</p>

      <motion.div
        className="h-3 bg-gray-700 rounded-full mt-1"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
      >
        <div className="h-3 rounded-full bg-neon"></div>
      </motion.div>
    </div>
  );
}
