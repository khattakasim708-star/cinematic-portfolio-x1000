"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create Particle Sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64); // Higher segments for smoother sphere
    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: "#00f7ff",
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation Function
    const animate = () => {
      particles.rotation.y += 0.002;
      particles.rotation.x += 0.001; // subtle X rotation for dynamic effect
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on Unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10"></div>;
}
