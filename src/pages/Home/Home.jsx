import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import "./Home.css";
import { APP_BASE_URL, ZINE_PATH, BOOKS_PATH } from "../../constants/Routes";
import ButtonsWrapper from "../../components/ButtonsWrapper/ButtonsWrapper";
import React from "react";

function Home() {
  useEffect(() => {
    document.title = "POEMIX | Daniel Brito"
  }, []);

  return (
    <div id="wrapper">
      <Logo />
      <ButtonsWrapper>
        <Button url={`${APP_BASE_URL}${ZINE_PATH}`} text={"Zines"} />
        <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text={"Livros"} />
      </ButtonsWrapper>
    </div>
  );
}

export default Home;
