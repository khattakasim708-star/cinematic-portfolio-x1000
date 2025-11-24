import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export default function Hero() {
  const textRef = useRef(null);
  const mountRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });

    // THREE.JS PARTICLE BACKGROUND
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 400,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, 400);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: "#37f7ff",
        size: 0.02,
      })
    );

    scene.add(particles);
    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div ref={mountRef}></div>
      <h1
        ref={textRef}
        className="text-6xl font-extrabold neon-text mt-10 text-center"
      >
        CINEMATIC PORTFOLIO X1000
      </h1>
      <p className="text-gray-300 mt-4 text-xl">
        The most extreme animated portfolio ever built.
      </p>
    </section>
  );
}
