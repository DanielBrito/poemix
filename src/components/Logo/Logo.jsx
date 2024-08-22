import { Link } from "react-router-dom";
import poemixLogo from "../../assets/homepage/poemix_logo.webp";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-wrapper" >
      <Link to={"https://danielbrito.github.io/projetos/#poemix"} target="_blank" rel="noopener noreferrer">
        <img src={poemixLogo} alt="Poemix logo" />
      </Link>
    </div>
  );
}

export default Logo;
