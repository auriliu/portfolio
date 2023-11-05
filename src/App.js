//

import "./App.css";

import about from "./assets/about.svg";
import challenges from "./assets/challenges.svg";
import contact from "./assets/contact.svg";
import home from "./assets/home.svg";
import projects from "./assets/projects.svg";
import skills from "./assets/skills.svg";

function App() {
  return (
    <div className="App">
      <img src={about} alt="about" />
      <img src={challenges} alt="challenges" />
      <img src={contact} alt="contact" />
      <img src={home} alt="home" />
      <img src={projects} alt="projects" />
      <img src={skills} alt="skills" />
    </div>
  );
}

export default App;
