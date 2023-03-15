import "./Projects.css";

import ghLogo from "../../assets/github-logo.png";
import goToIcon from "../../assets/go-to-icon.png";

// project images
import chatAppImg from "../../assets/chatapp.png";
import flashcardoImg from "../../assets/flaschardo1.png";
import lolChampsImg from "../../assets/lolchamps.png";
import instaCloneImg from "../../assets/instaclone.png";
import lepBojosImg from "../../assets/lepitenbojos.png";

// const projLink4 = {
//   site: "https://pokemau.github.io/Instagram-Clone/",
//   ghLink: "https://github.com/pokemau/Instagram-Clone",
// };
// const projLink5 = "https://lepitenbojos.org/";

const projects = [
  {
    id: "proj-1",
    name: "Chat Site",
    site: "https://yahallo.vercel.app/",
    desc: "A webapp where I used NextJS for the frontend and Firebase for the backend. The user can login through Firebase's built-in Google authentication, and can send messages in a public chatroom. The site has realtime updates whenever other users send a message.",
    techUsed: ["NEXTJS", "FIREBASE", "TAILWIND"],
    links: [
      {
        site: "https://github.com/pokemau/Chat-App",
        icon: ghLogo,
      },
      {
        site: "https://github.com/pokemau/Chat-App",
        icon: goToIcon,
      },
    ],
    img: chatAppImg,
  },

  {
    id: "proj-2",
    name: "Flashcardo",
    site: "https://flashcardo.vercel.app/",
    desc: "A flashcard app where it can be used by the user to quiz themselves when studying for an upcoming quiz or exam. It utilizes the browser's local storage to store the flashcard sets which can then be viewed or can be deleted by the user.",
    techUsed: ["NEXTJS", "TAILWIND", "HTML"],
    links: [
      {
        site: "https://github.com/pokemau/Flashcardo-2",
        icon: ghLogo,
      },
      {
        site: "https://flashcardo.vercel.app/",
        icon: goToIcon,
      },
    ],
    img: flashcardoImg,
  },

  {
    id: "proj-3",
    name: "LOL Champa",
    site: "https://lolchamps-dusky.vercel.app/",
    techUsed: ["REACTJS", "HTML", "CSS"],
    desc: "A web app made with ReactJS which shows the basic information of a champion in the famous MOBA game League of Legends. The static data is downloaded from Riot Games' data dragon.",
    links: [
      {
        site: "https://github.com/pokemau/React-LOL-Champs",
        icon: ghLogo,
      },
      {
        site: "https://lolchamps-dusky.vercel.app/",
        icon: goToIcon,
      },
    ],
    img: lolChampsImg,
  },

  // {

  // },
  {
    id: "proj-5",
    name: "Law Firm Website",
    site: "https://lepitenbojos.org/",
    techUsed: ["WORDPRESS"],
    desc: "This is a mobile responsive website for a law firm located in Cebu City. I made this website with WordPress when I was an intern for them.",
    links: [{ site: "https://lepitenbojos.org/", icon: goToIcon }],
    img: lepBojosImg,
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="project-h">PROJECTS</h1>
      <div className="projects-list">
        {projects.map((proj) => {
          return (
            <div className="project">
              <div className="proj-info-cont">
                <a href={proj.site} target="_blank" rel="noopener noreferrer">
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
                  <p>{tech}</p>
                ))}

                <div className="redirect-links-container">
                  {proj.links.map((link) => (
                    <a
                      href={link.site}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={link.icon} alt="" className="redirect-img" />
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
