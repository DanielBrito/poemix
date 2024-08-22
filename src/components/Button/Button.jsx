import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ url, text, title }) {
  return (
    <Link className="button-link" to={url} title={title} role="button" aria-label={`Ver ${text} publicados`}>
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
  title: PropTypes.string.isRequired,
};

export default Button;
