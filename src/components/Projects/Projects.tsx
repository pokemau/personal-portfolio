import "./Projects.css";

import { projects } from "./ProjectsList";

const Projects = () => {
  return (
    <div className="projects-cont" id="projects">
      <h1>PROJECTS</h1>
      <div className="projects-list">
        {projects.map((proj) => {
          return (
            <div className="project" key={proj.id}>
              <div className="proj-info-cont">
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={proj.img}
                    alt={`${proj.name} img`}
                    className="proj-img"
                  />
                </a>

                <h1 className="proj-title">{proj.name}</h1>
                <p className="proj-desc">{proj.desc}</p>
              </div>

              <div className="tech-used">
                {proj.techUsed?.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}

                <div className="redirect-links-container">
                  {proj.links.map((link) => (
                    <a
                      key={link.icon}
                      href={link.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.icon}
                        alt=""
                        className="redirect-img"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
