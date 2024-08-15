import { useLocation } from "react-router-dom";
import "./style.css";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

// Temporary component
function Protestizando() {
  const location = useLocation();

  return (
    <>
      <div className="book-reader">
        <Breadcrumb absolutePath={location.pathname} />
        <h1 className="title">Protestizando</h1>
      </div>
    </>
  );
}

export default Protestizando;
