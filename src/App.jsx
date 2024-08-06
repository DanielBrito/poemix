import poemixLogo from "./assets/poemix_logo.webp";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={poemixLogo} id="logo" alt="Poemix logo" />
        <p id="development-status">
          <i>Em desenvolvimento</i>
        </p>
      </div>
    </>
  );
}

export default App;
