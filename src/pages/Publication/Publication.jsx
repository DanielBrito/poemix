import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PdfWrapper from "../../components/PdfWrapper/PdfWrapper";
import { formatFromSnakeCase } from "../../util/format"
import "./Publication.css";

function Publication() {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const publicationName = location.pathname.split("/").pop()
    document.title = `${formatFromSnakeCase(publicationName)} | Daniel Brito`
  }, []);

  return (
    <div className="publication-reader">
      <Breadcrumb absolutePath={location.pathname} />
      <PdfWrapper id={id} />
    </div>
  );
}

export default Publication;
