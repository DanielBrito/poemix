import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Publication.css";

function Publication() {
  const location = useLocation();
  const {id} = useParams();

  return (
    <div className="publication-reader">
      <Breadcrumb absolutePath={location.pathname} />
      <h1 className="title">{id.replace(/_/g, " ").toUpperCase()}</h1>
    </div>
  );
}

export default Publication;
