import { useLocation } from "react-router-dom";
import {
  APP_BASE_URL,
  BOOKS_PATH,
  A_LER_VAZIOS_PATH,
  PROTESTIZANDO_PATH,
} from "../../constants/Paths";
import "./Books.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PublicationList from "../../components/PublicationList/PublicationList";
import aLerVaziosThumb from "../../assets/books/a_ler_vazios.webp";
import protestizandoThumb from "../../assets/books/protestizando.webp";

function Books() {
  const location = useLocation();

  const aLerVaziosPath = `${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`;
  const protestizandoPath = `${APP_BASE_URL}${BOOKS_PATH}${PROTESTIZANDO_PATH}`;
  const books = [
    {
      name: "A Ler Vazios",
      thumb: aLerVaziosThumb,
      path: aLerVaziosPath,
    },
    {
      name: "Protestizando",
      thumb: protestizandoThumb,
      path: protestizandoPath,
    },
  ];

  return (
    <div className="books-page">
      <Breadcrumb absolutePath={location.pathname} />
      <div className="publication-listing">
        <PublicationList publications={books} />
      </div>
    </div>
  );
}

export default Books;
