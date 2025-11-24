import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl glow mb-10 text-center">Skills</h2>

      <div className="max-w-3xl mx-auto">
        <SkillBar name="React / Next.js" value={95} />
        <SkillBar name="Three.js / WebGL" value={90} />
        <SkillBar name="GSAP / Motion" value={92} />
        <SkillBar name="UI / UX" value={88} />
      </div>
    </section>
  );
}
