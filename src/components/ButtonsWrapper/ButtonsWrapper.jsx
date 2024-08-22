import PropTypes from 'prop-types';
import './ButtonsWrapper.css';

function ButtonsWrapper({ children }) {
  return <div className="group-buttons">{children}</div>;
}

ButtonsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonsWrapper;
