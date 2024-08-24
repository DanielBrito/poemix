import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Zines.css';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PublicationList } from '../../components/PublicationList';
import { getZines } from '../../data/Zines';

export const Zines = () => {
  const location = useLocation();
  const zines = getZines();

  useEffect(() => {
    document.title = 'ZINES | Daniel Brito';
  }, []);

  return (
    <>
      <Breadcrumb absolutePath={location.pathname} />
      <main className="zines-list-wrapper">
        <PublicationList publications={zines} type="zine" />
      </main>
    </>
  );
};
