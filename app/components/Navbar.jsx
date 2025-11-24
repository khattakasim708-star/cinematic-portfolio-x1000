'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50 shadow-md"
    >
      <h1 className="text-xl font-bold cursor-pointer">Asim Portfolio</h1>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <ul className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
        <li className="p-2 hover:text-indigo-400 cursor-pointer">Home</li>
        <li className="p-2 hover:text-indigo-400 cursor-pointer">Skills</li>
        <li className="p-2 hover:text-indigo-400 cursor-pointer">Projects</li>
        <li className="p-2 hover:text-indigo-400 cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
