import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full flex justify-between p-6 bg-black/80 backdrop-blur-md z-50"
    >
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="space-x-4">
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </motion.nav>
  );
}
