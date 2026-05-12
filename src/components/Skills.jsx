import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-borderColor inline-block">Technical Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div className="bg-surfaceColor border border-borderColor rounded-lg p-6" key={category}>
            <h3 className="text-[1.1rem] mb-4 text-textMain font-semibold">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span className="bg-borderColor text-textMain px-3 py-1 rounded text-[0.85rem] font-medium" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
