import { Link } from "react-router-dom";
import poemixLogo from "../../assets/homepage/poemix_logo.webp";
import "./Logo.css";

function Logo() {
  return (
    <>
      <Link to={"https://danielbrito.github.io/projetos/#poemix"} target="_blank" rel="noopener noreferrer">
        <img src={poemixLogo} id="logo" alt="Poemix logo" width={"739px"} height={"263px"} />
      </Link>
    </>
  );
}

export default Logo;
