import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Zines from "./pages/Zines/Zines.jsx";
import Protestizando1 from "./pages/Publication/zines/Protestizando1.jsx";
import Books from "./pages/Books/Books.jsx";
import Error from "./pages/Error/Error.jsx";
import Publication from "./pages/Publication/Publication.jsx"
import "./index.css";
import {
  APP_BASE_URL,
  ZINE_PATH,
  BOOKS_PATH,
  PROTESTIZANDO_1_PATH
} from "./constants/Routes.js";

const router = createBrowserRouter([
  {
    path: APP_BASE_URL,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: `${APP_BASE_URL}${ZINE_PATH}`,
    element: <Zines />,
  },
  {
    path: `${APP_BASE_URL}${ZINE_PATH}${PROTESTIZANDO_1_PATH}`,
    element: <Protestizando1 />,
  },
  {
    path: `${APP_BASE_URL}${BOOKS_PATH}`,
    element: <Books />,
  },
  {
    path: `${APP_BASE_URL}${BOOKS_PATH}/:id`,
    element: <Publication />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
