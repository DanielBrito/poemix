import { getRoutes } from '../routes/Routes';

import { getThumbs } from './Thumbs';

const thumbs = getThumbs();
const routes = getRoutes();

const { APP_BASE_URL, BOOKS_PATH } = routes;
const booksPathPrefix = `${APP_BASE_URL}${BOOKS_PATH}`;

const books = [
  {
    name: 'Protestizando',
    releasedAt: '05/02/2015',
    thumb: thumbs.PROTESTIZANDO.image,
    path: `${booksPathPrefix}${routes.PROTESTIZANDO_PATH}`,
    altText: thumbs.PROTESTIZANDO.altText,
  },
  {
    name: 'A Ler Vazios',
    releasedAt: '30/07/2016',
    thumb: thumbs.A_LER_VAZIOS.image,
    path: `${booksPathPrefix}${routes.A_LER_VAZIOS_PATH}`,
    altText: thumbs.A_LER_VAZIOS.altText,
  },
];

export const getBooks = () => {
  return books;
};
