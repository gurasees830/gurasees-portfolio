import { lazy } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import LazySection from "./components/LazySection.jsx";

// These sections are below the first screen, so their code is split into separate
// files that are downloaded only when the visitor gets close to them.
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Resume = lazy(() => import("./components/Resume.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <LazySection id="projects" component={Projects} minHeight={900} />
        <LazySection id="skills" component={Skills} minHeight={520} />
        <LazySection id="resume" component={Resume} minHeight={640} />
        <LazySection id="contact" component={Contact} minHeight={640} />
      </main>

      <Footer />
    </>
  );
}

export default App;
