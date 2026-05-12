export default function Navbar({ activeSection }) {
  return (
    <nav className="flex justify-between items-center py-6 sticky top-0 bg-bgColor/90 backdrop-blur-md z-[100] border-b border-borderColor">
      <div className="text-xl font-bold text-textMain tracking-tight">Dinesh Prajapati</div>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#about" className={`text-[0.95rem] font-medium transition-colors duration-250 ${activeSection === 'about' ? 'text-primaryColor' : 'text-textMuted hover:text-primaryColor'}`}>About</a></li>
        <li><a href="#skills" className={`text-[0.95rem] font-medium transition-colors duration-250 ${activeSection === 'skills' ? 'text-primaryColor' : 'text-textMuted hover:text-primaryColor'}`}>Skills</a></li>
        <li><a href="#projects" className={`text-[0.95rem] font-medium transition-colors duration-250 ${activeSection === 'projects' ? 'text-primaryColor' : 'text-textMuted hover:text-primaryColor'}`}>Projects</a></li>
        <li><a href="#education" className={`text-[0.95rem] font-medium transition-colors duration-250 ${activeSection === 'education' ? 'text-primaryColor' : 'text-textMuted hover:text-primaryColor'}`}>Education</a></li>
        <li><a href="#contact" className={`text-[0.95rem] font-medium transition-colors duration-250 ${activeSection === 'contact' ? 'text-primaryColor' : 'text-textMuted hover:text-primaryColor'}`}>Contact</a></li>
      </ul>
    </nav>
  );
}
