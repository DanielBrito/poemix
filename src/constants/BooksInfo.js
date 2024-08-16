import aLerVaziosThumb from "../assets/books/a_ler_vazios.webp";
import protestizandoThumb from "../assets/books/protestizando.webp";
import {
    APP_BASE_URL,
    BOOKS_PATH,
    A_LER_VAZIOS_PATH,
    PROTESTIZANDO_PATH
  } from "./Routes";

const books = [
    {
      name: "A Ler Vazios",
      releasedAt: "30/07/2016",
      thumb: aLerVaziosThumb,
      path: `${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`
    },
    {
      name: "Protestizando",
      releasedAt: "05/02/2015",
      thumb: protestizandoThumb,
      path: `${APP_BASE_URL}${BOOKS_PATH}${PROTESTIZANDO_PATH}`
    },
  ];

export function getBooks() {
    return books
}