import { useLocation } from "react-router-dom";
import "./Books.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PublicationList from "../../components/PublicationList/PublicationList";
import { getBooks } from "../../constants/BooksInfo";

function Books() {
  const location = useLocation();
  const books = getBooks()

  return (
    <div className="books-page">
      <Breadcrumb absolutePath={location.pathname} />
      <div className="books-list-wrapper">
        <PublicationList publications={books} />
      </div>
    </div>
  );
}

export default Books;
