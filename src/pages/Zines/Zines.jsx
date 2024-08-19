import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Zines.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getZines } from "../../constants/ZinesInfo"
import PublicationList from "../../components/PublicationList/PublicationList";

function Zines() {
  const location = useLocation();
  const zines = getZines();

  useEffect(() => {
    document.title = "ZINES | Daniel Brito"
  }, []);

  return (
    <div className="zine-page">
      <Breadcrumb absolutePath={location.pathname} />
      <div className="zines-list-wrapper">
        <PublicationList publications={zines} type={"zine"} />
      </div>
    </div>
  );
}

export default Zines;
