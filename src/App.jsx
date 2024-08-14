import poemixLogo from "./assets/poemix_logo.webp";
import "./App.css";
import { APP_BASE_URL, ZINE_PATH, BOOKS_PATH } from "./paths";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div id="app">
        <img src={poemixLogo} id="logo" alt="Poemix logo" />
        <div id="group-buttons" className="group-buttons">
          <Button url={`${APP_BASE_URL}${ZINE_PATH}`} text={"Zines"} />
          <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text={"Livros"} />
        </div>
      </div>
    </>
  );
}

export default App;
