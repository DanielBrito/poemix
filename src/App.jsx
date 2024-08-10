import poemixLogo from "./assets/poemix_logo.webp";
import "./App.css";
import { APP_BASE_URL, FANZINE_PATH, BOOKS_PATH } from "./paths";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div>
        <img src={poemixLogo} id="logo" alt="Poemix logo" />
        <div id="group-buttons" className="group-buttons">
          <Button url={`${APP_BASE_URL}${FANZINE_PATH}`} text={"Fanzines"} />
          <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text={"Livros"} />
        </div>
      </div>
    </>
  );
}

export default App;
