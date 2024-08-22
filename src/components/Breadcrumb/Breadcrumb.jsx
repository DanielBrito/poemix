import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Breadcrumb.css';
import { idToTitle } from '../../util/Format';

import { Divider } from './Divider';

const splitPages = (absolutePath) => {
  return absolutePath.split('/').filter((item) => item !== '');
};

const buildPath = (pages) => {
  return `/${pages.join('/')}`;
};

const getProperTitle = (index) => {
  switch (index) {
    case 0:
      return 'Voltar ao início';
    case 1:
      return 'Ver publicações';
    default:
      return '';
  }
};

export const Breadcrumb = ({ absolutePath }) => {
  const pathItems = splitPages(absolutePath);
  const currentPagePath = pathItems.pop();

  return (
    <div className="breadcrumb-wrapper">
      <ol className="nav-list">
        {pathItems.map((pathItem, index) => {
          return (
            <li className="nav-item" key={pathItem} role="presentation" aria-label={getProperTitle(index)}>
              <Link
                className="previous-item"
                to={buildPath(pathItems.slice(0, index + 1))}
                title={getProperTitle(index)}
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
};

Breadcrumb.propTypes = {
  absolutePath: PropTypes.string.isRequired,
};
