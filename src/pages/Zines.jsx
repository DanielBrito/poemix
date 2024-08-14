import { Link, useLocation } from "react-router-dom";
import { APP_BASE_URL, ZINE_PATH, PROTESTIZANDO_1_PATH } from "../paths";
import "./style.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

function Zines() {
  const location = useLocation();

  return (
    <>
      <div className="zine-page">
        <Breadcrumb absolutePath={location.pathname} />
        <div className="publication-listing">
          <Link
            className="link"
            to={`${APP_BASE_URL}${ZINE_PATH}${PROTESTIZANDO_1_PATH}`}
          >
            Ler PROTESTIZANDO #1
          </Link>
        </div>
      </div>
    </>
  );
}

export default Zines;
