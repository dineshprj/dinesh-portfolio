import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-borderColor inline-block">Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div className="bg-surfaceColor border border-borderColor rounded-lg p-8 transition-transform duration-250 hover:-translate-y-1 hover:border-primaryColor" key={index}>
            <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-2 md:gap-0">
              <h3 className="text-xl text-textMain font-semibold">{project.title}</h3>
              <span className="text-[0.85rem] text-primaryColor font-mono">{project.date}</span>
            </div>
            <p className="text-textMuted mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="bg-transparent border border-primaryColor text-primaryColor px-3 py-1 rounded text-[0.85rem] font-medium" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
