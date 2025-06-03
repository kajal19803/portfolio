import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import profilePic from "./assets/kajal-photo.jpg"; // Aapka photo
import resumePDF from "./assets/Kajal-Verma-Resume.pdf"; // Aapka resume

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "CSS", level: 80 },
];

const projects = [
  {
    name: "Uma Dairy Platform",
    description:
      "Uma Dairy is a react and node.js based web page which is used to sell dairy products such as cowdunk,chhach,ghee.",
    live: "https://dairyfrontend.onrender.com/",
    code: "https://github.com/kajal19803/dairyfrontend",
  },
];

const experience = [
  {
    role: "Full stack Web Developer Intern",
    company: "EYGDS",
    duration: "Feb 2025 - March 2025",
    details:
      "Developed frontend components and contributed to backend APIs for internal projects.",
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Senior Developer at XYZ Corp",
    text: "Kajal is a dedicated and talented developer. She quickly grasps new concepts and delivers quality work.",
  },
  {
    name: "Anjali Singh",
    role: "Project Manager at DEF Inc",
    text: "Great teamwork and problem-solving skills. Highly recommended!",
  },
];

const blogs = [
  {
    title: "How I Built a Diary App Using MERN Stack",
    link: "https://kajalportfolio.hashnode.dev/how-i-built-a-full-stack-diary-app-with-mern-stack",
    date: "June 2025",
  },
  
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`w-screen h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-orange-50 text-gray-900"}`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className={`text-xl font-bold ${darkMode ? "text-orange-400" : "text-orange-700"}`}>
            Kajal Verma
          </div>
          <div className="space-x-6 hidden md:flex">
            {["about", "skills", "projects", "experience", "testimonials", "blog", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:${darkMode ? "text-orange-300" : "text-orange-600"} capitalize`}
              >
                {section}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 px-3 py-1 rounded-full border-2 ${darkMode ? "border-orange-400 text-orange-400" : "border-orange-700 text-orange-700"} transition`}
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Marquee Tagline */}
      <Marquee pauseOnHover gradient={false} speed={60} className={`py-1 ${darkMode ? "bg-orange-700 text-orange-50" : "bg-orange-300 text-orange-900"}`}>
        Passionate Full-Stack Developer 💻 | React, Node.js, MongoDB | Open to Internship
      </Marquee>

      {/* Hero / About */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-center" data-aos="fade-up">
        <div className="flex flex-col items-center gap-6">
          <img
            src={profilePic}
            alt="Kajal Verma"
            className="w-36 h-36 rounded-full border-4 border-orange-300 object-cover cursor-pointer hover:scale-105 transition"
            onClick={() => setShowImage(true)}
          />
          <h1 className={`text-4xl font-bold ${darkMode ? "text-orange-400" : "text-orange-700"}`}>
            Hi, I'm Kajal Verma 👋
          </h1>
          <h2 className="text-2xl font-semibold text-orange-600">
            I am a{" "}
            <span style={{ color: darkMode ? "#fb923c" : "#ea580c" }}>
              <Typewriter
                words={["Full Stack Developer", "React Enthusiast", "Open Source Contributor", "Tech Learner"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-lg max-w-2xl mt-4">
            I’m a 3rd year Computer Science student at NIAMT Ranchi. I build full-stack web applications using React, Node.js, Express, and MongoDB. I love coding, learning new technologies, and creating projects that solve real problems.
          </p>
          <a
            href={resumePDF}
            download="Kajal-Verma-Resume.pdf"
            className={`mt-6 inline-block px-6 py-2 rounded-full transition ${darkMode ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
          onClick={() => setShowImage(false)}
          aria-label="Close profile image modal"
          role="dialog"
        >
          <img
            src={profilePic}
            alt="Kajal Verma Full"
            className="max-w-md rounded-lg border-4 border-white"
          />
        </div>
      )}

      {/* Skills */}
      <section id="skills" className={`max-w-4xl mx-auto px-4 py-16 rounded-md shadow-md my-8 ${darkMode ? "bg-gray-800" : "bg-white"}`} data-aos="fade-right">
        <h2 className={`text-3xl font-semibold mb-6 text-center ${darkMode ? "text-orange-400" : "text-orange-700"}`}>
          Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map(({ name, level }) => (
            <li key={name} className="w-36 bg-orange-100 rounded-full p-3 dark:bg-orange-900">
              <div className="flex justify-between mb-1 font-semibold text-orange-700 dark:text-orange-300">
                {name}
              </div>
              <div className="w-full bg-orange-300 rounded-full h-3 overflow-hidden dark:bg-orange-700">
                <div
                  className="bg-orange-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${level}%` }}
                />
              </div>
              <div className={`text-right text-sm mt-1 ${darkMode ? "text-orange-300" : "text-orange-800"}`}>
                {level}%
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className={`max-w-4xl mx-auto px-4 py-16 rounded-md shadow-md my-8 ${darkMode ? "bg-gray-800" : "bg-white"}`} data-aos="fade-left">
        <h2 className={`text-3xl font-semibold mb-6 text-center ${darkMode ? "text-orange-400" : "text-orange-700"}`}>
          Projects
        </h2>
        <ul className="space-y-8">
          {projects.map(({ name, description, live, code }) => (
            <li key={name} className="space-y-2">
              <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
              <p>{description}</p>
              <div className="flex gap-4">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  View Code
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className={`max-w-4xl mx-auto px-4 py-16 rounded-md shadow-md my-8 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
        data-aos="fade-left"
      >
        <h2
          className={`text-3xl font-semibold mb-8 text-center ${
            darkMode ? "text-orange-400" : "text-orange-700"
          }`}
        >
          Experience
        </h2>
        <ul className="space-y-6 max-w-xl mx-auto">
          {experience.map(({ role, company, duration, details }, i) => (
            <li key={i} className="border-l-4 border-orange-400 pl-4">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-orange-300" : "text-orange-700"
                }`}
              >
                {role} @ {company}
              </h3>
              <p className="italic text-sm text-gray-500">{duration}</p>
              <p className="mt-2">{details}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      

      {/* Blog */}
      <section
        id="blog"
        className={`max-w-4xl mx-auto px-4 py-16 rounded-md shadow-md my-8 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
        data-aos="fade-up"
      >
        <h2
          className={`text-3xl font-semibold mb-8 text-center ${
            darkMode ? "text-orange-400" : "text-orange-700"
          }`}
        >
          Blog
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-xl mx-auto">
          {blogs.map(({ title, link, date }, i) => (
            <li key={i}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline ${
                  darkMode ? "text-orange-300" : "text-orange-600"
                } font-semibold`}
              >
                {title}
              </a>{" "}
              <span className="text-sm text-gray-500">{date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
  id="contact"
  className={`max-w-4xl mx-auto px-4 py-16 rounded-md shadow-md my-8 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
  data-aos="fade-right"
>
  <h2
    className={`text-3xl font-semibold mb-8 text-center ${
      darkMode ? "text-orange-400" : "text-orange-700"
    }`}
  >
    Contact Me
  </h2>

  {/* Contact Info */}
  <div
    className={`text-center mb-8 space-y-2 ${
      darkMode ? "text-gray-300" : "text-gray-700"
    }`}
  >
    <p>
      📧 Email:{" "}
      <a
        href="mailto:kajalverma6263@gmail.com"
        className="text-orange-500 hover:underline"
      >
        kajalverma6263@gmail.com
      </a>
    </p>
    <p>
      📞 Phone:{" "}
      <a href="tel:+917000235024" className="text-orange-500 hover:underline">
        +917000235024
      </a>
    </p>
    <p>
      🔗 LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/kajal-verma-09a344241/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:underline"
      >
        linkedin.com
      </a>
    </p>
  </div>

  {/* Contact Form */}
  <form
    className="max-w-md mx-auto flex flex-col gap-4"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thanks for reaching out! I'll get back to you soon.");
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
      required
      className="p-3 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
    />
    <input
      type="email"
      placeholder="Your Email"
      required
      className="p-3 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
    />
    <textarea
      placeholder="Your Message"
      required
      rows="5"
      className="p-3 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
    />
    <button
      type="submit"
      className="bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
    >
      Send Message
    </button>
  </form>
</section>
 {/* Footer */}
      <footer
        className={`text-center py-6 ${
          darkMode ? "bg-gray-900 text-orange-400" : "bg-orange-600 text-white"
        }`}
      >
        © 2025 Kajal Verma. All rights reserved.
      </footer>
    </div>
  );
}
