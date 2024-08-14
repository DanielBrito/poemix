import { useLocation } from "react-router-dom";
import "./style.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function ALerVazios() {
  const location = useLocation();

  return (
    <>
      <div className="book-reader">
        <Breadcrumb absolutePath={location.pathname} />
        <h1 className="title">A Ler Vazios</h1>
      </div>
    </>
  );
}

export default ALerVazios;
