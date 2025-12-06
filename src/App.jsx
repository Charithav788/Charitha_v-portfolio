import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans scroll-smooth">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 fade-start">
        <h1 className="text-6xl font-bold mb-4 animate-fadeIn">Hi, I’m Charitha</h1>
        <p className="text-xl mb-6 animate-fadeIn animate-delay-200">
          Full Stack Developer | React & Django | AI/ML Enthusiast
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition transform hover:scale-105 animate-fadeIn animate-delay-400"
        >
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800 fade-start">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            title="Cyber Shield"
            description="Flask-based ML tool integrating IDS, phishing detector, and vulnerability scanner."
            link="https://github.com/Charithav788/Cyber-Shield"
            image="https://via.placeholder.com/400x250"
            tech="Python, Flask, ML, Cybersecurity"
          />
          <ProjectCard
            title="Crypto Prediction"
            description="LSTM model forecasting cryptocurrency prices with interactive dashboard."
            link="https://github.com/Charithav788/Crypto-Prediction"
            image="https://via.placeholder.com/400x250"
            tech="Python, LSTM, ML, Dashboard"
          />
          <ProjectCard
            title="Online Voting System"
            description="Secure web-based voting platform built with PHP, JS, and SQL."
            link="https://github.com/Charithav788/Online-Voting-System"
            image="https://via.placeholder.com/400x250"
            tech="PHP, JS, SQL, Security"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900 fade-start">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            { name: "React", category: "Frontend" },
            { name: "Django", category: "Backend" },
            { name: "Python", category: "Programming" },
            { name: "JavaScript", category: "Frontend" },
            { name: "HTML", category: "Frontend" },
            { name: "CSS", category: "Frontend" },
            { name: "Tailwind", category: "Frontend" },
            { name: "Node.js", category: "Backend" },
            { name: "AI/ML", category: "ML" },
            { name: "Cybersecurity", category: "Security" },
          ].map((skill, idx) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full text-white font-semibold bg-indigo-600 animate-fadeIn animate-delay-${idx * 100}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-800 fade-start">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed animate-fadeIn">
          I am a passionate Full Stack Developer with experience in building
          modern web applications using React, Django, and TailwindCSS. I enjoy
          creating responsive, user-friendly interfaces and learning new
          technologies in AI/ML and Cybersecurity.
        </p>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-900 fade-start">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            { name: "AWS Cloud Practitioner Essentials", link: "#" },
            { name: "HTB Info Gathering Web Edition", link: "#" },
            { name: "Network Scanning with Nmap", link: "#" },
            { name: "Machine Learning Intern - Unified Mentor", link: "#" },
          ].map((cert, idx) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition animate-fadeIn animate-delay-${idx*100}"
            >
              {cert.name}
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-800 fade-start">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-4 animate-fadeIn">
          <p className="text-center">
            📧 <a href="mailto:charithav635@gmail.com" className="text-indigo-400 hover:text-indigo-200">charithav635@gmail.com</a> | 📞 7676281478
          </p>
          <p className="text-center">
            🌐 <a href="https://github.com/Charithav788" className="text-indigo-400 hover:text-indigo-200">GitHub</a> | <a href="https://www.linkedin.com/in/charitha-v" className="text-indigo-400 hover:text-indigo-200">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        &copy; {new Date().getFullYear()} Charitha. All rights reserved.
      </footer>

      {/* Tailwind Animations */}
      <style>
        {`
          .fade-start { opacity: 0; transform: translateY(20px); }
          .fade-in { opacity: 1; transform: translateY(0); transition: all 1s ease; }
          .animate-fadeIn { animation: fadeIn 1s forwards; }
          .animate-delay-100 { animation-delay: 0.1s; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-300 { animation-delay: 0.3s; }
          .animate-delay-400 { animation-delay: 0.4s; }
          .animate-delay-500 { animation-delay: 0.5s; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, link, image, tech }) {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-2 text-sm text-gray-300">{tech}</p>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-indigo-400 hover:text-indigo-200 font-semibold"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
