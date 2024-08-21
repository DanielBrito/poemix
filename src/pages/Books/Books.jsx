import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Books.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PublicationList from "../../components/PublicationList/PublicationList";
import { getBooks } from "../../data/BooksInfo";

function Books() {
  const location = useLocation();
  const books = getBooks();

  useEffect(() => {
    document.title = "LIVROS | Daniel Brito"
  }, []);

  return (
    <div className="books-page">
      <Breadcrumb absolutePath={location.pathname} />
      <div className="books-list-wrapper">
        <PublicationList publications={books} type={"book"} />
      </div>
    </div>
  );
}

export default Books;
