import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Breadcrumb.css";
import {
  APP_BASE_URL,
  A_LER_VAZIOS_PATH,
  BOOKS_PATH,
  ZINE_PATH,
  PROTESTIZANDO_1_PATH,
} from "../../paths";
import Divider from "./Divider";

const bookPagesPath = [
  { name: "poemix", label: "Poemix", path: APP_BASE_URL },
  { name: "livros", label: "Livros", path: `${APP_BASE_URL}${BOOKS_PATH}` },
  {
    name: "a_ler_vazios",
    label: "A Ler Vazios",
    path: `${APP_BASE_URL}${BOOKS_PATH}${A_LER_VAZIOS_PATH}`,
  },
];

const zinePagesPath = [
  { name: "poemix", label: "Poemix", path: APP_BASE_URL },
  { name: "zines", label: "Zines", path: `${APP_BASE_URL}${ZINE_PATH}` },
  {
    name: "protestizando_1",
    label: "Protestizando #1",
    path: `${APP_BASE_URL}${ZINE_PATH}${PROTESTIZANDO_1_PATH}`,
  },
];

function Breadcrumb({ activePageUrl }) {
  var pagesPath;

  const isBookNavigation =
    bookPagesPath.findIndex((page) => page.name === activePageUrl) !== -1;

  if (isBookNavigation) pagesPath = bookPagesPath;
  else pagesPath = zinePagesPath;

  const currentPageIndex = pagesPath.findIndex(
    (page) => page.name === activePageUrl
  );

  const previousPages = pagesPath.slice(0, currentPageIndex);

  return (
    <div className="breadcrumb">
      <ol className="flex items-center whitespace-nowrap">
        {previousPages.map((page) => {
          return (
            <li className="inline-flex items-center" key={page.name}>
              <Link className="previous-items" to={page.path}>
                {page.label}
              </Link>
              <Divider />
            </li>
          );
        })}
        <li className="active-item" aria-current="page">
          {pagesPath.at(currentPageIndex).label.toUpperCase()}
        </li>
      </ol>
    </div>
  );
}

Breadcrumb.propTypes = {
  activePageUrl: PropTypes.string.isRequired,
};

export default Breadcrumb;
