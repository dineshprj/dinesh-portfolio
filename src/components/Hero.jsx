export default function Hero() {
  return (
    <header className="py-24 min-h-[70vh] flex flex-col justify-center" id="about">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-4 leading-[1.2] tracking-tight">Hi, I'm Dinesh Prajapati 👋</h1>
        <h2 className="text-2xl font-semibold text-primaryColor mb-6">MCA (AI & ML) Student & Full-Stack Developer</h2>
        <p className="text-lg text-textMuted max-w-[700px] mb-10 leading-relaxed">
          Passionate full-stack developer with expertise in the MERN stack, REST API development, and database management. 
          Skilled in building scalable web applications with authentication, CRUD operations, and responsive web design. 
          Strong foundation in API integration, performance optimization, and clean code practices.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-primaryColor text-white px-6 py-3 rounded-md font-semibold transition-colors duration-250 hover:bg-[#3b82f6]">View My Projects</a>
          <a href="mailto:dineshprj7@gmail.com" className="bg-transparent text-textMain px-6 py-3 rounded-md font-semibold border border-borderColor transition-all duration-250 hover:border-primaryColor hover:text-primaryColor">Contact Me</a>
        </div>
      </div>
    </header>
  );
}
