import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Zines.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PublicationList from '../../components/PublicationList/PublicationList';
import { getZines } from '../../data/Zines';

const Zines = () => {
  const location = useLocation();
  const zines = getZines();

  useEffect(() => {
    document.title = 'ZINES | Daniel Brito';
  }, []);

  return (
    <>
      <Breadcrumb absolutePath={location.pathname} />
      <div className="zines-list-wrapper">
        <PublicationList publications={zines} type="zine" />
      </div>
    </>
  );
};

export default Zines;
