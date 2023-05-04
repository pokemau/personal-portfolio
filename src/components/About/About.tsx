import "./About.css";

import aboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <div className="about-cont" id="about">
      <h1>ABOUT ME</h1>

      <div className="about-content">
        <img src={aboutImg} alt="Laptop Image" />

        <p>
          My name is Maurice Tañeca and I'm a frontend web developer.
          Currently a Computer Science student at Cebu Institute of
          Technology University. Programming has been my passion since the
          day I found out about it. I have a good foundation of HTML, CSS,
          TypeScript and Javascript and have made projects with
          technologies like React, Next, and Firebase I specialize in
          creating user-friendly and responsive web applications using the
          latest frontend technologies. I'm passionate about crafting
          beautiful and functional interfaces that provide a seamless user
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
