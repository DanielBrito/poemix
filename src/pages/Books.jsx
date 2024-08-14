import { Link, useLocation } from "react-router-dom";
import { APP_BASE_URL, BOOKS_PATH, A_LER_VAZIOS_PATH } from "../paths";
import "./style.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

function Books() {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  return (
    <>
      <div className="books-page">
        <Breadcrumb activePageUrl={currentPage} />
        <div className="publication-listing">
          <Link
            className="link"
            to={`${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`}
          >
            Ler A LER VAZIOS
          </Link>
        </div>
      </div>
    </>
  );
}

export default Books;
