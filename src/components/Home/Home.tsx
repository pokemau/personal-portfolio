import pic from "../../assets/my_pic.jpg";
import linkedInLogo from "../../assets/linkedin.png";
import ghLogo from "../../assets/github-logo.png";
import handEmoji from "../../assets/waving-hand.png";

import "./Home.css";
import Techstack from "../Techstack/Techstack";

const Home = () => {
  return (
    <div className="home-cont" id="about">
      <div className="all-info-cont">
        <img className="my-img" src={pic} alt="maurice pic" />
        <div className="intro-cont">
          <div className="intro-title">
            <h2>Web Developer</h2>
            <img src={handEmoji} alt="Waving hand emoji" />
          </div>
          <h2 className="intro-desc">
            Hi, I am Maurice and I am a web developer from the Philippines.
          </h2>

          <div className="socials-cont">
            <a
              href="https://www.linkedin.com/in/mauricetaneca/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="ftr-img"
                src={linkedInLogo}
                alt="linkedin img"
              />
            </a>

            <a
              href="https://github.com/pokemau"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="ftr-img" src={ghLogo} alt="github img" />
            </a>
          </div>
        </div>
      </div>

      <Techstack />
    </div>
  );
};

export default Home;
