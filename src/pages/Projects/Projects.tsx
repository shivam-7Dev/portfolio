import "./Projects.css";
import crypto from "../../assets/crypto.png";

const projects = [
  {
    name: "Crypto Price Tracker",
    image: crypto,
    link: "https://cryptopricetracker.sharma7.dev/",
  },
  // Add more later here
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="page-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
