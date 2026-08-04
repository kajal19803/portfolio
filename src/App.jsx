import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Positions = lazy(() => import("./components/sections/Positions"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionFallback() {
  return <div className="section-padding" aria-hidden="true" />;
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Home />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Positions />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
