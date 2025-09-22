import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        {/* About section */}
        <div className="bg-about bg-cover bg-center bg-no-repeat" id="about">
          <About />
        </div>

        {/* Skills section → Tech */}
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10" id="skills">
          <Tech />
        </div>

        {/* Projects */}
        <div id="projects">
          <Projects />
        </div>

        {/* Experience section */}
        <div
          id="experience"
          className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>

        {/* Contact */}
        <div className="relative z-0" id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
