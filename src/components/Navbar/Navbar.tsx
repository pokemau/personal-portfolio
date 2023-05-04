import { Link } from "react-scroll";
import { useEffect, useRef, useState, MouseEvent } from "react";

// images
import hamburger from "../../assets/hamburger.png";

import "./Navbar.css";

const Navbar = () => {
  const navLinkRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const hideMobileNav = () => {
    navLinkRef.current?.classList.remove("active");
  };

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    }
    const handleResize = () => {
      const winWidth = window.innerWidth;
      if (winWidth <= 480) setIsMobile(true);
      else setIsMobile(false);
    };
    window.addEventListener("resize", handleResize);

    const handleClickOnSite = (e: globalThis.MouseEvent) => {
      const el = e.target as HTMLElement;
      const target = el.className;

      if (target !== "toggle-nav-img") {
        hideMobileNav();
      }
    };
    window.addEventListener("click", (e) => handleClickOnSite(e));
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", (e) => handleClickOnSite(e));
    };
  }, []);

  const showMobileNav = () => {
    if (navLinkRef.current) {
      navLinkRef.current.classList.toggle("active");
    }
  };

  return (
    <nav className="navbar">
      <h1 className="nav-logo">MT</h1>
      <div
        ref={navLinkRef}
        className={`${isMobile ? "mobile-nav" : "nav-links"}`}
      >
        <ul>
          <li>
            <Link
              onClick={hideMobileNav}
              to="about"
              smooth={true}
              offset={-50}
              duration={200}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={hideMobileNav}
              to="projects"
              smooth={true}
              offset={-60}
              duration={400}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={hideMobileNav}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="toggle-nav">
        <img
          onClick={showMobileNav}
          src={hamburger}
          className="toggle-nav-img"
          alt="hamburger icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
