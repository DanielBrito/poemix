import { Link } from "react-router-dom";
import { APP_BASE_URL, BOOKS_PATH, A_LER_VAZIOS_PATH } from "../paths";
import "./style.css";

function Books() {
  return (
    <div className="content">
      <h1 className="title">
        <b>Livros</b>
      </h1>
      <Link to={`${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`}>
        Ler A LER VAZIOS
      </Link>
    </div>
  );
}

export default Books;
