import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/general/not_found.webp";
import "./Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img className="not-found-image" src={errorImage} width={"424px"} height={"333px"} />
      <p className="message">Página não encontrada</p>
    </div>
  );
}
