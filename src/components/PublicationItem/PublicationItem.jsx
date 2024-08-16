import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PublicationItem.css";

function PublicationItem({ publication }) {
  return (
    <div className="wrapper">
      <div className="w-full h-full inset-0 transition-transform transform hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200 ease-out">
        <Link to={publication.path}>
          <img
            src={publication.thumb}
            className="w-full h-full object-cover thumb"
          />
        </Link>
      </div>
      <p className="publication-title">{publication.name.toUpperCase()}</p>
      <p className="release-date">{publication.releasedAt}</p>
    </div>
  );
}

PublicationItem.propTypes = {
  publication: PropTypes.shape({
    name: PropTypes.string.isRequired,
    releasedAt: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
};

export default PublicationItem;
