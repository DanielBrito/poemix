import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Breadcrumb.css";
import Divider from "./Divider/Divider";

function splitPages(absolutePath) {
  return absolutePath.split("/").filter((item) => item !== "");
}

function formatLabel(snakeCaseText) {
  var label = snakeCaseText.replace(/_/g, " ").toUpperCase();

  if (label.match(RegExp("PROTESTIZANDO\\s[0-9]+"))) {
    return label.replace(" ", " #");
  }

  return label;
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
                className="previous-items"
                to={buildPath(pathItems.slice(0, index + 1))}
              >
                {formatLabel(pathItem)}
              </Link>
              <Divider />
            </li>
          );
        })}
        <li className="active-item" aria-current="page">
          {formatLabel(currentPagePath)}
        </li>
      </ol>
    </div>
  );
}

Breadcrumb.propTypes = {
  absolutePath: PropTypes.string.isRequired,
};

export default Breadcrumb;
