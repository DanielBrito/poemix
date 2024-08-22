import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PublicationItem.css";

function PublicationItem({ publication }) {
  return (
    <div className="publication-item-wrapper">
      <div className="thumb-wrapper">
        <Link to={publication.path} title={`Ler ${publication.name.toUpperCase()}`}>
          <img
            src={publication.thumb}
            className="publication-thumb"
            width={"339px"}
            height={"480px"}
          />
        </Link>
      </div>
      <p className="publication-title">{publication.name.toUpperCase()}</p>
      <p className="publication-release-date">{publication.releasedAt}</p>
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
