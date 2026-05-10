import React from 'react';

export default function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">Dinesh Prajapati</div>
      <ul className="nav-links">
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
