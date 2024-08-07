import poemixLogo from "./assets/poemix_logo.webp";
import "./App.css";
import { Link } from "react-router-dom";
import { APP_BASE_URL, FANZINE_PATH, BOOKS_PATH } from "./paths";

function App() {
  return (
    <>
      <div>
        <img src={poemixLogo} id="logo" alt="Poemix logo" />
        <nav>
          <Link className="link" to={`${APP_BASE_URL}${FANZINE_PATH}`}>
            Fanzines
          </Link>
          {"|"}
          <Link className="link" to={`${APP_BASE_URL}${BOOKS_PATH}`}>
            Livros
          </Link>
        </nav>
      </div>
    </>
  );
}

export default App;
