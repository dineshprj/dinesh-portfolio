import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="content-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
