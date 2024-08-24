import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Books.css';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PublicationList } from '../../components/PublicationList';
import { getBooks } from '../../data/Books';

export const Books = () => {
  const location = useLocation();
  const books = getBooks();

  useEffect(() => {
    document.title = 'LIVROS | Daniel Brito';
  }, []);

  return (
    <>
      <Breadcrumb absolutePath={location.pathname} />
      <main className="books-list-wrapper">
        <PublicationList publications={books} type="book" />
      </main>
    </>
  );
};
