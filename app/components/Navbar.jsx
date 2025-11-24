"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl z-50 px-6 py-3 flex justify-between items-center">
      <motion.h1
        className="text-2xl font-bold glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        X1000
      </motion.h1>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-xl glow"
      >
        ☰
      </button>

      <ul className="hidden md:flex gap-6 text-lg">
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {open && (
        <div className="md:hidden absolute right-4 top-16 bg-black p-4 rounded-xl shadow-xl">
          <p>Skills</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  );
}
