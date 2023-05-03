import pic from "../../assets/my_pic.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="" id="about">
        <img className="" src={pic} alt="maurice pic" />

        <div className="intro-text-container">
          <h2 className="intro-h">MAURICE R. TAÑECA</h2>
          <p className="intro-p">Web Developer</p>

          <br />

          <p className="intro-text">
            Currently a Computer Science student at Cebu Institute of
            Technology. Programming has been my passion since the day I
            found out about it. With a good foundation of HTML, CSS and
            Javascript, I am eager to learn more and expand my knowledge as
            a developer.
          </p>
          <p className="intro-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
