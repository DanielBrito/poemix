import { Link } from "react-router-dom";
import poemixLogo from "../../assets/homepage/poemix_logo.webp";

function Logo() {
  return (
    <div width={"739px"} height={"263px"} className="max-w-[600px]">
      <Link to={"https://danielbrito.github.io/projetos/#poemix"} target="_blank" rel="noopener noreferrer">
        <img src={poemixLogo} id="logo" alt="Poemix logo" width={"739px"} height={"263px"} />
      </Link>
    </div>
  );
}

export default Logo;
