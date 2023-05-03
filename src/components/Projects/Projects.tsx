import "./Projects.css";

import ghLogo from "../../assets/github-logo.png";
import goToIcon from "../../assets/go-to-icon.png";

// project images
import chatAppImg from "../../assets/chatapp.png";
import flashcardoImg from "../../assets/flaschardo1.png";
import lolChampsImg from "../../assets/lolchamps.png";
import instaCloneImg from "../../assets/instaclone.png";
import lepBojosImg from "../../assets/lepitenbojos.png";
import sergdleImg from "../../assets/sergdle.png";

const projects = [
  {
    id: "chat-site",
    name: "Chat Site",
    site: "https://yahallo.vercel.app/",
    desc: "A webapp with NextJS for the frontend and Firebase for the backend. The user can login through Firebase's built-in Google authentication. Users can send messages in a public chatroom with realtime updates",
    techUsed: ["NEXTJS", "FIREBASE", "TAILWIND"],
    links: [
      {
        site: "https://github.com/pokemau/Chat-App",
        icon: ghLogo,
      },
      {
        site: "https://yahallo.vercel.app/",
        icon: goToIcon,
      },
    ],
    img: chatAppImg,
  },

  {
    id: "flashcardo",
    name: "Flashcardo",
    site: "https://flashcardo.vercel.app/",
    desc: "A website for making flashcards to help the user study for an upcoming quiz or exam. It uses the browser's local storage to store the flashcard sets which can be deleted by the user.",
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
    id: "lol-champs",
    name: "LOL Champa",
    site: "https://lolchamps-dusky.vercel.app/",
    techUsed: ["REACTJS", "HTML", "CSS"],
    desc: "A web app made with ReactJS which shows the basic information of a champion in the famous MOBA game League of Legends. The champion data is fetched from Riot Games's Data Dragon API.",
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
  {
    id: "sergdle",
    name: "Sergdle",
    site: "https://sergdle.vercel.app/",
    techUsed: ["TYPESCRIPT", "TAILWIND"],
    desc: "Sergdle is a Wordle clone, where the player has to guess the hidden word within 6 guesses to win the game.",
    links: [
      {
        site: "https://github.com/pokemau/sergdle",
        icon: ghLogo,
      },
      {
        site: "https://sergdle.vercel.app/",
        icon: goToIcon,
      },
    ],
    img: sergdleImg,
  },
  {
    id: "lawfirm-site",
    name: "Law Firm Website",
    site: "https://lepitenbojos.org/",
    techUsed: ["WORDPRESS"],
    desc: "This is a mobile responsive website for a law firm located in Cebu City. I made this website with WordPress when I was an intern for them.",
    links: [{ site: "https://lepitenbojos.org/", icon: goToIcon }],
    img: lepBojosImg,
  },
  {
    id: "insta-clone",
    name: "Instagram Clone",
    site: "/",
    techUsed: ["HTML", "CSS"],
    desc: "A simple site made with plain CSS and HTML to apply my skills on following a given template or design for a website.",
    links: [
      {
        site: "https://github.com/pokemau/Instagram-Clone",
        icon: ghLogo,
      },
      {
        site: "https://pokemau.github.io/instagram-clone/",
        icon: goToIcon,
      },
    ],
    img: instaCloneImg,
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="project-h">PROJECTS</h1>
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
