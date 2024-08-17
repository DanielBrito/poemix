import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PublicationItem.css";

function PublicationItem({ publication }) {
  return (
    <div className="wrapper">
      <div className="w-full h-full bg-gray-100">
        <Link to={publication.path}>
          <img
            src={publication.thumb}
            className="w-full h-full object-cover thumb relative z-0 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-400"
            width={"339px"}
            height={"480px"}
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
