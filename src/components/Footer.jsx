export default function Footer() {
  return (
    <footer id="contact" className="border-t border-borderColor py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-textMuted mb-8">I'm always open to new opportunities and collaborations.</p>
      <div className="flex justify-center flex-wrap gap-6 mb-12">
        <a href="mailto:dineshprj7@gmail.com" className="inline-flex items-center bg-surfaceColor border border-borderColor px-6 py-3 rounded-md text-textMain font-medium transition-all duration-250 hover:border-primaryColor hover:text-primaryColor hover:-translate-y-0.5">📧 dineshprj7@gmail.com</a>
        <a href="tel:+916299704195" className="inline-flex items-center bg-surfaceColor border border-borderColor px-6 py-3 rounded-md text-textMain font-medium transition-all duration-250 hover:border-primaryColor hover:text-primaryColor hover:-translate-y-0.5">📱 +91 6299704195</a>
        <a href="https://linkedin.com/in/dinesh-prajapati-prj/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-surfaceColor border border-borderColor px-6 py-3 rounded-md text-textMain font-medium transition-all duration-250 hover:border-primaryColor hover:text-primaryColor hover:-translate-y-0.5">💼 LinkedIn</a>
        <a href="https://github.com/dineshprj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-surfaceColor border border-borderColor px-6 py-3 rounded-md text-textMain font-medium transition-all duration-250 hover:border-primaryColor hover:text-primaryColor hover:-translate-y-0.5">💻 GitHub</a>
      </div>
      <p className="text-[0.85rem] text-borderColor">© 2026 Dinesh Prajapati. Built with React.js & Tailwind CSS</p>
    </footer>
  );
}
