import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Fanzines from "./pages/Fanzines.jsx";
import Protestizando1 from "./pages/fanzines/Protestizando1.jsx";
import ALerVazios from "./pages/books/ALerVazios.jsx";
import Books from "./pages/Books.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  APP_BASE_URL,
  FANZINE_PATH,
  BOOKS_PATH,
  PROTESTIZANDO_1_PATH,
  A_LER_VAZIOS_PATH,
} from "./paths.jsx";

const router = createBrowserRouter([
  {
    path: APP_BASE_URL,
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: `${APP_BASE_URL}${FANZINE_PATH}`,
    element: <Fanzines />,
  },
  {
    path: `${APP_BASE_URL}${FANZINE_PATH}${PROTESTIZANDO_1_PATH}`,
    element: <Protestizando1 />,
  },
  {
    path: `${APP_BASE_URL}${BOOKS_PATH}`,
    element: <Books />,
  },
  {
    path: `${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`,
    element: <ALerVazios />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
