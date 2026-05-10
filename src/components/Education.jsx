import React from 'react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="content-section">
      <h2 className="section-title">Education & Training</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <div className="timeline-meta">
                <span className="timeline-year">{item.year}</span>
                {item.score && <span className="timeline-score">{item.score}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="training-section">
        <h3>On-the-Job Training & Certifications</h3>
        <div className="training-card">
          <h4>Launcher Academy (May 2023 – Jul 2023)</h4>
          <p>Completed hands-on training in Java Swing, Oracle, PHP, and MySQL while contributing to an inventory management project. Gained practical experience in database design, backend development, and application workflows.</p>
        </div>
        <ul className="certifications-list">
          <li>🏆 <strong>ReactJS</strong> - Infosys Springboard (January 2025)</li>
          <li>🏆 <strong>Node.js</strong> - Infosys Springboard (April 2026)</li>
        </ul>
      </div>
    </section>
  );
}
