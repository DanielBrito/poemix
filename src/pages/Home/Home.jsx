import { React, useEffect } from 'react';

import Button from '../../components/Button/Button';
import ButtonsWrapper from '../../components/ButtonsWrapper/ButtonsWrapper';
import Logo from '../../components/Logo/Logo';
import './Home.css';
import { getRoutes } from '../../routes/Routes';

function Home() {
  const { APP_BASE_URL, ZINES_PATH, BOOKS_PATH } = getRoutes();

  useEffect(() => {
    document.title = 'POEMIX | Daniel Brito';
  }, []);

  return (
    <div className="home-wrapper">
      <Logo />
      <ButtonsWrapper>
        <Button url={`${APP_BASE_URL}${ZINES_PATH}`} text="Zines" title="Ver zines publicados" />
        <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text="Livros" title="Ver livros publicados" />
      </ButtonsWrapper>
    </div>
  );
}

export default Home;
