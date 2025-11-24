"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center bg-black bg-opacity-50 z-50">
      <h1 className="text-white font-bold text-2xl">Asim Portfolio</h1>
      <ul className="flex gap-6 text-white">
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
