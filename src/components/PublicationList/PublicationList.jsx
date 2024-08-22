import PropTypes from 'prop-types';

import './PublicationList.css';
import PublicationItem from '../PublicationItem/PublicationItem';

function getProperStyle(publicationType) {
  const bookWrapperStyle = `grid gap-5 grid-cols-2 pt-2 max-w-[468px] list-wrapper`;
  const zineWrapperStyle = `grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pt-2 max-w-[1400px] list-wrapper`;

  switch (publicationType) {
    case 'book':
      return bookWrapperStyle;
    case 'zine':
      return zineWrapperStyle;
  }
}

function PublicationList({ publications, type }) {
  const pulicationsReversed = [...publications].reverse();
  const style = getProperStyle(type);

  return (
    <div className={`${style}`}>
      {pulicationsReversed.map((publication) => {
        return <PublicationItem publication={publication} key={publication.name} />;
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
    }),
  ),
  type: PropTypes.string.isRequired,
};

export default PublicationList;
