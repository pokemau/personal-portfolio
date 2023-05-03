import "./Techstack.css";

import htmlLogo from "../../assets/html-logo.png";
import cssLogo from "../../assets/css-logo.png";
import jsLogo from "../../assets/js-logo.png";
import tsLogo from "../../assets/ts-logo.png";
import firebaseLogo from "../../assets/firebase-logo.png";
import reactLogo from "../../assets/react-logo.svg";
import tailwindLogo from "../../assets/tailwind-logo.png";

const Techstack = () => {
  return (
    <div className="techstack-cont">
      <h3 className="techstack-title">Techstack</h3>
      <div className="images-cont">
        <img src={jsLogo} alt="JavaScript Logo" />
        <img src={tsLogo} alt="TypeScript Logo" />
        <img src={reactLogo} alt="ReactJS Logo" />
        <img src={tailwindLogo} alt="Tailwind CSS Logo" />
        <img src={htmlLogo} alt="HTML Logo" />
        <img src={cssLogo} alt="CSS Logo" />
        <img src={firebaseLogo} alt="Firebase Logo" />
      </div>
    </div>
  );
};

export default Techstack;
