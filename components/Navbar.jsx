import { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    gsap.from(".nav-item", {
      y: -40,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
      duration: 1.2,
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full p-5 flex justify-between items-center glass z-50">
      <div className="text-2xl font-bold neon-text">X1000 Portfolio</div>

      <div className="flex gap-8 text-lg">
        <a className="nav-item hover:text-neon cursor-pointer">Home</a>
        <a className="nav-item hover:text-neon cursor-pointer">Skills</a>
        <a className="nav-item hover:text-neon cursor-pointer">Projects</a>
        <a className="nav-item hover:text-neon cursor-pointer">Contact</a>
      </div>
    </nav>
  );
}
