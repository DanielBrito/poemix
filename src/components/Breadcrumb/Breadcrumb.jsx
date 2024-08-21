import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Breadcrumb.css";
import Divider from "./Divider/Divider";
import { idToTitle } from "../../util/Format"

function splitPages(absolutePath) {
  return absolutePath.split("/").filter((item) => item !== "");
}

function buildPath(pages) {
  return `/${pages.join("/")}`;
}

function Breadcrumb({ absolutePath }) {
  const pathItems = splitPages(absolutePath);
  const currentPagePath = pathItems.pop();

  return (
    <div className="breadcrumb">
      <ol className="flex items-center whitespace-nowrap">
        {pathItems.map((pathItem, index) => {
          return (
            <li className="inline-flex items-center" key={pathItem}>
              <Link
                className="previous-item"
                to={buildPath(pathItems.slice(0, index + 1))}
              >
                {idToTitle(pathItem)}
              </Link>
              <Divider />
            </li>
          );
        })}
        <li className="active-item" aria-current="page">
          {idToTitle(currentPagePath)}
        </li>
      </ol>
    </div>
  );
}

Breadcrumb.propTypes = {
  absolutePath: PropTypes.string.isRequired,
};

export default Breadcrumb;
