import poemixLogo from "../../assets/homepage/poemix_logo.webp";
import "./Logo.css";

function Logo() {
  return (
    <>
      <img src={poemixLogo} id="logo" alt="Poemix logo" width={"739px"} height={"263px"} />
    </>
  );
}

export default Logo;
