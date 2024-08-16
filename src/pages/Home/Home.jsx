import Button from "../../components/Button/Button";
import Illustration from "../../components/Illustration/Illustration";
import "./Home.css";
import { APP_BASE_URL, ZINE_PATH, BOOKS_PATH } from "../../constants/Routes";
import ButtonsWrapper from "../../components/ButtonsWrapper/ButtonsWrapper";

function Home() {
  return (
    <div id="wrapper">
      <Illustration />
      <ButtonsWrapper>
        <Button url={`${APP_BASE_URL}${ZINE_PATH}`} text={"Zines"} />
        <Button url={`${APP_BASE_URL}${BOOKS_PATH}`} text={"Livros"} />
      </ButtonsWrapper>
    </div>
  );
}

export default Home;
