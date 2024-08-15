import { Link, useLocation } from "react-router-dom";
import {
  APP_BASE_URL,
  BOOKS_PATH,
  A_LER_VAZIOS_PATH,
} from "../../constants/Paths";
import "./Books.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PublishedBooksList from "../../components/PublishedBooksList/PublishedBooksList";

function Books() {
  const location = useLocation();

  return (
    <div className="books-page">
      <Breadcrumb absolutePath={location.pathname} />
      <div className="publication-listing">
        <Link
          className="link"
          to={`${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`}
        >
          Ler A LER VAZIOS
        </Link>
        <PublishedBooksList />
      </div>
    </div>
  );
}

export default Books;
