import { Link } from "react-scroll";
import { useRef } from "react";

// images
import hamburger from "../../assets/hamburger.png";

import "./Navbar.css";

const Navbar = () => {
  const navLinkRef = useRef<HTMLDivElement>(null);

  function showNav() {
    if (navLinkRef.current)
      navLinkRef.current.classList.toggle("active-hamburger");
  }

  return (
    <nav className="navbar">
      <h1 className="nav-logo">MT</h1>
      <div className="nav-links" ref={navLinkRef}>
        <Link
          to="about"
          className="nav-link"
          smooth={true}
          offset={-25}
          duration={200}>
          About
        </Link>
        <Link
          to="projects"
          className="nav-link"
          smooth={true}
          offset={-15}
          duration={400}>
          Projects
        </Link>
        <Link
          to="contact"
          className="nav-link"
          smooth={true}
          offset={50}
          duration={500}>
          Contact
        </Link>
      </div>

      <div onClick={showNav} className="hamburger-container">
        <img className="hamburger-icon" src={hamburger} alt="hamburger icon" />
      </div>
    </nav>
  );
};

export default Navbar;
