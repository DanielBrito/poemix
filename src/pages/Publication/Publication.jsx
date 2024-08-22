import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb';
import { PdfWrapper } from '../../components/PdfWrapper';
import { idToTitle } from '../../util/Format';
import './Publication.css';

export const Publication = () => {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const publicationName = location.pathname.split('/').pop();
    document.title = `${idToTitle(publicationName)} | Daniel Brito`;
  }, [location.pathname]);

  return (
    <div className="publication-wrapper">
      <Breadcrumb absolutePath={location.pathname} />
      <PdfWrapper id={id} />
    </div>
  );
};
