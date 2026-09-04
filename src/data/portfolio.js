export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Leadership", href: "#positions" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kajal19803",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kajal-verma-09a344241/",
  },
  {
    label: "Portfolio",
    href: "https://portfolio-wtzu.onrender.com/",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/kajalverma6263/",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/kajalverma6263",
  },
  {
    label: "Chess.com",
    href: "https://www.chess.com/member/rumesha",
  },
];

export const hero = {
  name: "Kajal Verma",
  role: "Full-Stack Developer",
  headline: "Building scalable products with code, AI, and impact.",
  badge: "B.Tech CSE · NIAMT Ranchi",
  intro:
    "Computer Science student specializing in full-stack web development and AI. I design and ship production-ready applications — from MERN e-commerce platforms to Azure-powered conversational AI — with a focus on performance, scalability, and real-world impact.",
  stats: [
    { value: "1500+", label: "LeetCode Rating" },
    { value: "210+", label: "DSA Problems" },
    { value: "8.4", label: "CGPA" },
  ],
};

export const about = {
  summary:
    "I am a B.Tech Computer Science and Engineering student at NIAMT Ranchi with hands-on experience across full-stack development and AI. Through internships with EYGDS and Microsoft Azure (AICTE), I have built production-grade MERN applications and deployed AI-powered solutions using Azure Cognitive Services and Hugging Face. I combine strong fundamentals in data structures and algorithms with practical experience in REST APIs, cloud deployment, and open-source contribution.",
  objective:
    "I aim to contribute as a full-stack or AI engineer — building reliable, user-centric software that solves real problems while continuing to grow through challenging projects, open-source work, and collaborative teams.",
  interests: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Open Source",
    "Competitive Programming",
    "Chess",
    "Music & Performance",
    "Community Service",
  ],
};

export const education = [
  {
    institution:
      "National Institute of Advanced Manufacturing Technology (NIAMT)",
    location: "Ranchi, India",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "Aug 2023 — May 2027",
    cgpa: "8.4",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
    ],
    description:
      "Building a strong foundation in computer science theory and software engineering while delivering production-ready projects alongside coursework.",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript", "TypeScript", "C", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Firebase", "VS Code", "Postman", "nhost"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Render", "Vercel", "Cloudinary"],
  },
  {
    title: "AI / ML",
    skills: [
      "Hugging Face",
      "Azure AI",
      "Azure Cognitive Services",
      "Azure Language Studio",
      "Prompt Engineering",
      "NLP Fundamentals",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Teamwork",
      "Communication",
      "Adaptability",
      "Client-Centred Development",
    ],
  },
];

export const experience = [
  {
    title: "AI Intern",
    company: "Microsoft Azure & Cognitive Services (AICTE + Microsoft)",
    period: "May 2025 — June 2025",
    description:
      "Gained hands-on exposure to the Microsoft Azure AI platform, including Cognitive Services, Language Studio, and Responsible AI tools.",
    highlights: [
      "Developed and deployed UMA Assistant, an AI-powered chatbot using Hugging Face, Azure AI, and Azure Language Studio for natural language understanding and conversational assistance.",
      "Applied NLP fundamentals and prompt engineering to build production-ready conversational AI workflows on Azure.",
      "Worked with Responsible AI practices while integrating Azure Cognitive Services into real-world applications.",
    ],
    tech: [
      "Microsoft Azure",
      "Cognitive Services",
      "Azure Language Studio",
      "Hugging Face",
      "NLP",
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company: "EYGDS (AICTE Virtual Internship)",
    period: "Feb 2025 — March 2025",
    description:
      "Developed a full-stack MERN e-commerce application with authentication, payment integration, and admin features in a production-oriented environment.",
    highlights: [
      "Built and shipped a scalable MERN e-commerce platform with authentication, payments, and admin capabilities.",
      "Optimized REST APIs and improved database query performance to enhance application efficiency.",
      "Automated repetitive workflows and gained hands-on experience in backend scaling and real-time integrations.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
    ],
  },
];

export const projects = [
  {
    title: "Uma Dairy",
    subtitle: "Full-Stack E-commerce Platform",
    description:
      "Built and deployed a production-ready MERN application supporting authentication, order management, payment processing, shipping, and customer support — containerized with Docker and deployed on Render.",
    impact:
      "Integrated JWT, Google OAuth, Razorpay, Shiprocket, and Brevo APIs into a single scalable platform deployed to production.",
    image: "/screenshots/Home.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Google OAuth",
      "Razorpay",
      "Shiprocket API",
      "Brevo Email API",
      "Docker",
      "Cloudinary",
      "Tailwind CSS",
      "Render",
    ],
    github: "https://github.com/kajal19803",
    live: null,
  },
  {
    title: "Identity Reconciliation System",
    subtitle: "Backend Service",
    description:
      "Designed and implemented a backend service to identify and consolidate customer records across multiple transactions, merging duplicate contacts through intelligent linking logic.",
    impact:
      "Optimized database queries and schema design with Prisma ORM and PostgreSQL for reliable, high-performance record reconciliation.",
    image: null,
    tech: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
    github: "https://github.com/kajal19803",
    live: null,
  },
];

export const achievements = [
  {
    title: "Polaris Fellowship 2026",
    description:
      "Advanced to Round 3 after clearing the first two competitive selection rounds.",
    icon: "trophy",
  },
  {
    title: "GirlScript Summer of Code 2025",
    description:
      "Selected as an open-source contributor for GSSoC 2025.",
    icon: "code",
  },
  {
    title: "HackerRank Certifications",
    description:
      "5-Star in Problem Solving, 4-Star in JavaScript, and 4-Star in C.",
    icon: "award",
  },
  {
    title: "LeetCode — 1500+ Rating",
    description:
      "Achieved a 1500+ LeetCode rating with 210+ Data Structures and Algorithms problems solved.",
    icon: "star",
  },
  {
    title: "National Chess Tournament 2018",
    description:
      "Represented JNV Jabalpur at the national-level chess tournament in JNV Wayanad.",
    icon: "chess",
  },
];

export const positions = [
  {
    title: "Kartavya Foundation Volunteer",
    organization: "Kartavya Foundation",
    description:
      "Taught school-level mathematics to underprivileged children, focusing on foundational concepts and consistent learning support.",
    icon: "heart",
  },
  {
    title: "Lead Senior Vocalist & Mentor",
    organization: "Ensemble Club, NIAMT",
    description:
      "Served as lead senior vocalist and mentor in the college music team, training juniors and coordinating performances.",
    icon: "music",
  },
  {
    title: "Chess Club Member",
    organization: "Chess Club, NIAMT",
    description:
      "Maintained a 1400+ rating on Chess.com and organized online tournaments on Chess.com and Lichess.",
    icon: "chess",
  },
  {
    title: "Placement Coordinator",
    organization: "NIAMT",
    description:
      "Coordinated with recruiters and students regarding internship and placement opportunities, managing scheduling and event organization.",
    icon: "users",
  },
];

export const contact = {
  email: "ce4162023@niamt.ac.in",
  phone: "+91-7000235024",
  location: "Ranchi, India",
};
