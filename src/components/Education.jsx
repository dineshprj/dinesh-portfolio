import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-borderColor inline-block">Education & Training</h2>
      <div className="border-l-2 border-borderColor pl-8 mb-12 flex flex-col gap-8">
        {education.map((item, index) => (
          <div className="relative" key={index}>
            <div className="absolute -left-[2.4rem] top-1 w-3 h-3 bg-bgColor border-2 border-primaryColor rounded-full"></div>
            <div>
              <h3 className="text-[1.1rem] mb-1 font-semibold">{item.degree}</h3>
              <h4 className="text-base text-textMuted font-medium mb-2">{item.institution}</h4>
              <div className="flex gap-4 text-[0.85rem] font-semibold">
                <span className="text-primaryColor">{item.year}</span>
                {item.score && <span className="text-textMuted">{item.score}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surfaceColor border border-borderColor rounded-lg p-8">
        <h3 className="text-[1.2rem] mb-6 text-textMain font-semibold">On-the-Job Training & Certifications</h3>
        <div className="mb-6">
          <h4 className="text-base text-primaryColor mb-2 font-semibold">Launcher Academy (May 2023 – Jul 2023)</h4>
          <p className="text-textMuted">Completed hands-on training in Java Swing, Oracle, PHP, and MySQL while contributing to an inventory management project. Gained practical experience in database design, backend development, and application workflows.</p>
        </div>
        <ul className="flex flex-col gap-2 list-none">
          <li className="text-textMuted">🏆 <strong className="text-textMain font-semibold">ReactJS</strong> - Infosys Springboard (January 2025)</li>
          <li className="text-textMuted">🏆 <strong className="text-textMain font-semibold">Node.js</strong> - Infosys Springboard (April 2026)</li>
        </ul>
      </div>
    </section>
  );
}
