import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Books from './pages/Books/Books.jsx';
import Home from './pages/Home/Home.jsx';
import Publication from './pages/Publication/Publication.jsx';
import Zines from './pages/Zines/Zines.jsx';
import './index.css';
import { getRoutes } from './routes/Routes.js';

const { APP_BASE_URL, ZINES_PATH, BOOKS_PATH } = getRoutes();
const zinesPathPrefix = `${APP_BASE_URL}${ZINES_PATH}`;
const booksPathPrefix = `${APP_BASE_URL}${BOOKS_PATH}`;

const router = createBrowserRouter([
  {
    path: APP_BASE_URL,
    element: <Home />,
  },
  {
    path: `${zinesPathPrefix}`,
    element: <Zines />,
  },
  {
    path: `${zinesPathPrefix}/:id`,
    element: <Publication />,
  },
  {
    path: `${booksPathPrefix}`,
    element: <Books />,
  },
  {
    path: `${booksPathPrefix}/:id`,
    element: <Publication />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
