import PropTypes from "prop-types";
import "./PublicationList.css";
import PublicationItem from "../PublicationItem/PublicationItem";

function PublicationList({ publications }) {
  return (
    <div className="grid grid-cols-2 gap-5 p-3 wrapper">
      {publications.map((publication) => {
        return (
          <PublicationItem publication={publication} key={publication.name} />
        );
      })}
    </div>
  );
}

PublicationList.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      releasedAt: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default PublicationList;
