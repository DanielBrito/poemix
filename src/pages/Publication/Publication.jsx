import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PdfWrapper from "../../components/PdfWrapper/PdfWrapper";
import "./Publication.css";

function Publication() {
  const location = useLocation();
  const {id} = useParams()

  return (
    <div className="publication-reader">
      <Breadcrumb absolutePath={location.pathname} />
      <PdfWrapper id={id} />
    </div>
  );
}

export default Publication;
