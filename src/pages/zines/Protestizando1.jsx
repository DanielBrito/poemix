import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./style.css";

function Protestizando1() {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  return (
    <>
      <div className="zine-reader">
        <Breadcrumb activePageUrl={currentPage} />
        <h1 className="title">PROTESTIZANDO #1</h1>
      </div>
    </>
  );
}

export default Protestizando1;
