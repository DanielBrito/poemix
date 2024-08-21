import { getThumbs } from "./Thumbs";
import { getRoutes } from "../routes/Routes";

const thumbs = getThumbs()
const routes = getRoutes()

const { APP_BASE_URL, BOOKS_PATH } = routes;
const booksPathPrefix = `${APP_BASE_URL}${BOOKS_PATH}`;

const books = [
    {
      name: "Protestizando",
      releasedAt: "05/02/2015",
      thumb: thumbs.PROTESTIZANDO,
      path: `${booksPathPrefix}${routes.PROTESTIZANDO_PATH}`
    },
    {
      name: "A Ler Vazios",
      releasedAt: "30/07/2016",
      thumb: thumbs.A_LER_VAZIOS,
      path: `${booksPathPrefix}${routes.A_LER_VAZIOS_PATH}`
    },
  ];

export function getBooks() {
    return books
}