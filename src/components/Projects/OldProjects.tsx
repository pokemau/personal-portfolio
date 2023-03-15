import "./Projects.css";

import ghLogo from "../../../public/github-logo.png";

const projLink1 = {
  site: "https://yahallo.vercel.app/",
  ghLink: "https://github.com/pokemau/Chat-App",
};
const projLink2 = {
  site: "https://flashcardo.vercel.app/",
  ghLink: "https://github.com/pokemau/Flashcardo-2",
};
const projLink3 = {
  site: "https://lolchamps-dusky.vercel.app/",
  ghLink: "https://github.com/pokemau/React-LOL-Champs",
};
const projLink4 = {
  site: "https://pokemau.github.io/Instagram-Clone/",
  ghLink: "https://github.com/pokemau/Instagram-Clone",
};
const projLink5 = "https://lepitenbojos.org/";

const projects = [
  {
    name: "Chat Site",
    site: "https://yahallo.vercel.app/",
    desc: "A webapp where I used NextJS for the frontend and Firebase for the backend. The user can login through Firebase's built-in Google authentication, and can send messages in a public chatroom. The site has realtime updates whenever other users send a message.",
    techUsed: ["NEXTJS", "FIREBASE", "TAILWIND"],
    links: {
      site: "https://github.com/pokemau/Chat-App",
      ghLink: "https://github.com/pokemau/Chat-App",
    },
  },
  {},
  {},
  {},
  {},
];

const OldProjects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="project-h">PROJECTS</h1>
      <div className="projects-list">
        {projects.map((proj) => {
          return (
            <div className="project">
              <div className="proj-info-cont">
                <a href={proj.site} target="_blank" rel="noopener noreferrer">
                  <img src="" alt={`${proj.name} img`} />
                </a>

                <h1 className="proj-title">${proj.name}</h1>
                <p className="proj-desc">${proj.desc}</p>
              </div>

              <div className="tech-used">
                {proj.techUsed?.map((tech) => (
                  <p>${tech}</p>
                ))}

                <div className="redirect-links-container">
                  {Object.keys(proj.links!).map((link) => (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={ghLogo} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* PROJECT 1 */}
        <div className="project">
          <div className="proj-info-cont">
            <a href={projLink1.site} target="_blank" rel="noopener noreferrer">
              <img
                className="proj-img"
                src={require("../assets/chatapp.png")}
                alt="chat app img"
              />
            </a>

            <h1 className="proj-title">Chat Site</h1>
            <p className="proj-desc">
              A webapp where I used NextJS for the frontend and Firebase for the
              backend. The user can login through Firebase's built-in Google
              authentication, and can send messages in a public chatroom. The
              site has realtime updates whenever other users send a message.
            </p>
          </div>
          <div className="tech-used">
            <p>NEXTJS</p>
            <p>FIREBASE</p>
            <p>TAILWIND</p>
            <p>HTML</p>

            <div className="redirect-links-container">
              <a
                href={projLink1.ghLink}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
                  alt=""
                />
              </a>
              <a
                href={projLink1.site}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project">
          <div className="proj-info-cont">
            <a href={projLink2.site} target="_blank" rel="noopener noreferrer">
              <img
                className="proj-img"
                src={require("../assets/flaschardo1.png")}
                alt="flashcardo img"
              />
            </a>

            <h1 className="proj-title">Flashcardo</h1>
            <p className="proj-desc">
              A flashcard app where it can be used by the user to quiz
              themselves when studying for an upcoming quiz or exam. It utilizes
              the browser's local storage to store the flashcard sets which can
              then be viewed or can be deleted by the user.
            </p>
          </div>
          <div className="tech-used">
            <p>NEXTJS</p>
            <p>TAILWIND</p>
            <p>HTML</p>

            <div className="redirect-links-container">
              <a
                href={projLink2.ghLink}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
                  alt=""
                />
              </a>
              <a
                href={projLink2.site}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project">
          <div className="proj-info-cont">
            <a href={projLink3.site} target="_blank" rel="noopener noreferrer">
              <img
                className="proj-img"
                src={require("../assets/lolchamps.png")}
                alt="flashcardo img"
              />
            </a>

            <h1 className="proj-title">LOL Champa</h1>
            <p className="proj-desc">
              A web app made with ReactJS which shows the basic information of a
              champion in the famous MOBA game League of Legends. The static
              data is downloaded from Riot Games' data dragon.
            </p>
          </div>
          <div className="tech-used">
            <p>REACTJS</p>
            <p>HTML</p>
            <p>CSS</p>

            <div className="redirect-links-container">
              <a
                href={projLink3.ghLink}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
                  alt=""
                />
              </a>
              <a
                href={projLink3.site}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project">
          <div className="proj-info-cont">
            <a href={projLink4.site} target="_blank" rel="noopener noreferrer">
              <img
                className="proj-img"
                src={require("../assets/instaclone.png")}
                alt="flashcardo img"
              />
            </a>

            <h1 className="proj-title">Instagram Clone</h1>
            <p className="proj-desc">
              A simple site made with plain CSS and HTML to apply my skills on
              following a given template or design for a website.
            </p>
          </div>
          <div className="tech-used">
            <p>HTML</p>
            <p>CSS</p>

            <div className="redirect-links-container">
              <a
                href={projLink4.ghLink}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/github-logo.png")}
                  alt=""
                />
              </a>
              <a
                href={projLink4.site}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 5 */}
        <div className="project">
          <div className="proj-info-cont">
            <a href={projLink5} target="_blank" rel="noopener noreferrer">
              <img
                className="proj-img"
                src={require("../assets/lepitenbojos.png")}
                alt="lepitenbojos img"
              />
            </a>

            <h1 className="proj-title">Law Firm Website</h1>
            <p className="proj-desc">
              This is a mobile responsive website for a law firm located in Cebu
              City. I made this website with WordPress when I was an intern for
              them.
            </p>
          </div>
          <div className="tech-used">
            <p>WORDPRESS</p>

            <div className="redirect-links-container">
              <a href={projLink5} target="_blank" rel="noopener noreferrer">
                <img
                  className="redirect-img"
                  src={require("../assets/go-to-icon.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldProjects;
