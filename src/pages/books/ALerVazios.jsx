import { useLocation } from "react-router-dom";
import "./style.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function ALerVazios() {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  return (
    <>
      <div className="book-reader">
        <Breadcrumb activePageUrl={currentPage} />
        <h1 className="title">A Ler Vazios</h1>
      </div>
    </>
  );
}

export default ALerVazios;
