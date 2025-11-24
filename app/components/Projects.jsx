"use client";

export default function Projects() {
  const projects = [
    { name: "Portfolio Website", link: "#" },
    { name: "E-commerce App", link: "#" },
    { name: "Blog Platform", link: "#" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <h2 className="text-4xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="bg-blue-700 rounded-lg p-6 shadow-lg text-center hover:bg-blue-600 transition-colors"
          >
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
}
