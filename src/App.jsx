import { useEffect } from "react";

export default function App() {
  // Simple fade-in animation on scroll
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
          Full Stack Web Developer | React & Tailwind
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
            title="Project 1"
            description="React + Tailwind Portfolio Example"
            link="#"
            image="https://via.placeholder.com/400x250"
          />
          <ProjectCard
            title="Project 2"
            description="Another awesome web app."
            link="#"
            image="https://via.placeholder.com/400x250"
          />
          <ProjectCard
            title="Project 3"
            description="My third portfolio project."
            link="#"
            image="https://via.placeholder.com/400x250"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900 fade-start">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind",
            "Node.js",
            "Python",
            "Django",
          ].map((skill, idx) => (
            <span
              key={skill}
              className={`px-4 py-2 bg-indigo-600 rounded-full text-white font-semibold animate-fadeIn animate-delay-${idx * 100}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-800 fade-start">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed animate-fadeIn">
          I am a passionate Full Stack Developer with experience in building
          modern web applications using React, TailwindCSS, Node.js, and Django.
          I enjoy creating responsive, user-friendly, and visually appealing
          interfaces.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900 fade-start">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-2xl mx-auto flex flex-col gap-4 animate-fadeIn">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition font-semibold transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800">
        &copy; {new Date().getFullYear()} Charitha. All rights reserved.
      </footer>

      {/* Tailwind Animations */}
      <style>
        {`
          .fade-start { opacity: 0; transform: translateY(20px); }
          .fade-in { opacity: 1; transform: translateY(0); transition: all 1s ease; }
          .animate-fadeIn { animation: fadeIn 1s forwards; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-400 { animation-delay: 0.4s; }
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
function ProjectCard({ title, description, link, image }) {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
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
