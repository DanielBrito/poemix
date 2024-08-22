import PropTypes from "prop-types";
import { getFileSource } from "../../data/FilesSource";
import "./PdfWrapper.css"

function PdfWrapper({id}) {
    const fileSource = getFileSource(id)

    return(
        <div className="pdf-wrapper">
            <iframe 
                src={fileSource} 
                className="pdf-iframe" 
                id="pdf-iframe"
                allow={"autoplay"}
                title={"Visualizador de PDF"}
            >
            </iframe>
        </div>
    )
}

PdfWrapper.propTypes = {
    id: PropTypes.string.isRequired
}

export default PdfWrapper;