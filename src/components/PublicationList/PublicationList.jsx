import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PublicationList.css";

function PublicationList({ publications }) {
  return (
    <div className="grid grid-cols-2 gap-8 p-3 wrapper">
      {publications.map((publication) => {
        return (
          <div
            className="w-full h-full inset-0 transition-transform transform hover:-translate-x-1 hover:-translate-y-1 duration-200 ease-out"
            key={publication.name}
          >
            <Link to={publication.path}>
              <img
                src={publication.thumb}
                className="w-full h-full object-cover thumb"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

PublicationList.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumb: PropTypes.object.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default PublicationList;
