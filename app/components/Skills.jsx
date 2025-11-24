"use client";

export default function Skills() {
  const skills = ["React", "Next.js", "Three.js", "Tailwind CSS", "AI Integrations"];
  return (
    <section id="skills" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div key={skill} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
