"use client";

export default function Skills() {
  const skills = ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h2 className="text-4xl font-semibold mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-purple-700 px-6 py-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
