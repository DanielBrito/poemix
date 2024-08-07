import { Link } from "react-router-dom";
import { APP_BASE_URL, FANZINE_PATH, PROTESTIZANDO_1_PATH } from "../paths";
import "./style.css";

function Fanzines() {
  return (
    <div className="content">
      <h1 className="title">
        <b>Fanzines</b>
      </h1>
      <Link to={`${APP_BASE_URL}${FANZINE_PATH}${PROTESTIZANDO_1_PATH}`}>
        Ler PROTESTIZANDO #1
      </Link>
    </div>
  );
}

export default Fanzines;
