import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ url, text }) {
  return (
    <Link className="button-link" to={url}>
      <div className="button-block group">
        <span className="button-block-hover"></span>
        <span className="button-block-default"></span>
        <span className="button-text">{text}</span>
      </div>
    </Link>
  );
}

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
