import { React, useEffect } from 'react';

import { Button } from '../../components/Button';
import { ButtonsWrapper } from '../../components/ButtonsWrapper';
import { Logo } from '../../components/Logo';
import './Home.css';
import { getRoutes } from '../../routes/Routes';

export const Home = () => {
  const { APP_BASE_URL, ZINES_PATH, BOOKS_PATH } = getRoutes();

  useEffect(() => {
    document.title = 'POEMIX | Daniel Brito';
  }, []);

  return (
    <main className="home-wrapper">
      <Logo />
      <ButtonsWrapper>
        <Button url={`${APP_BASE_URL}${ZINES_PATH}`} text="Zines" title="Ver zines publicados" />
        <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text="Livros" title="Ver livros publicados" />
      </ButtonsWrapper>
    </main>
  );
};
