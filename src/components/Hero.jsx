import React from 'react';

export default function Hero() {
  return (
    <header className="hero-section" id="about">
      <div className="hero-content">
        <h1>Hi, I'm Dinesh Prajapati 👋</h1>
        <h2>MCA (AI & ML) Student & Full-Stack Developer</h2>
        <p className="summary">
          Passionate full-stack developer with expertise in the MERN stack, REST API development, and database management. 
          Skilled in building scalable web applications with authentication, CRUD operations, and responsive web design. 
          Strong foundation in API integration, performance optimization, and clean code practices.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="mailto:dineshprj7@gmail.com" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </header>
  );
}
