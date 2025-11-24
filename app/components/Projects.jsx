"use client";

export default function Projects() {
  const projects = [
    { name: "Portfolio Site", description: "Cinematic portfolio with Next.js & Three.js" },
    { name: "AI Helper", description: "Homework helper with AI & animations" },
    { name: "3D Animation Demo", description: "Three.js interactive animations" }
  ];

  return (
    <section id="projects" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {projects.map(project => (
          <div key={project.name} className="bg-gray-900 p-6 rounded-xl shadow-xl w-80">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
