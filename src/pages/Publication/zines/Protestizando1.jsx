import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import "./style.css";

// Temporary component
function Protestizando1() {
  const location = useLocation();

  return (
    <div className="zine-reader">
      <Breadcrumb absolutePath={location.pathname} />
      <h1 className="title">PROTESTIZANDO #1</h1>
    </div>
  );
}

export default Protestizando1;
