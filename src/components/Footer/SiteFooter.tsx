import "./SiteFooter.css";

// images
import linkedInLogo from "../../assets/linkedin.png";
import ghLogo from "../../assets/github-logo.png";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <h1 className="footer-logo">MT</h1>

      <p>Made by: Maurice R. Tañeca</p>

      <div className="socmed-container">
        <a
          href="https://www.linkedin.com/in/maurice-ta%C3%B1eca-986067255/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer">
          <img className="ftr-img" src={linkedInLogo} alt="linkedin img" />
        </a>

        <a
          href="https://github.com/pokemau"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer">
          <img className="ftr-img" src={ghLogo} alt="github img" />
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
