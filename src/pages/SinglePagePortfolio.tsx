import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Expriences";
import Education from "./Education";
import Services from "./Services";
import Contacts from "./Contacts";

const SinglePagePortfolio = () => {
  return (
    <div className="divide-y divide-slate-200 dark:divide-gray-800/80">
      <div id="home" className="scroll-mt-24">
        <Home />
      </div>

      <div id="about" className="scroll-mt-24">
        <About />
      </div>

      <div id="skills" className="scroll-mt-24">
        <Skills />
      </div>

      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>

      <div id="experience" className="scroll-mt-24">
        <Experiences />
      </div>

      <div id="education" className="scroll-mt-24">
        <Education />
      </div>

      <div id="services" className="scroll-mt-24">
        <Services />
      </div>

      <div id="contact" className="scroll-mt-24">
        <Contacts />
      </div>
    </div>
  );
};

export default SinglePagePortfolio;