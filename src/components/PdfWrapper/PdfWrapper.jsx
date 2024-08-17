import PropTypes from "prop-types";
import { getFileSource } from "../../constants/FilesSource";
import "./PdfWrapper.css"

function PdfWrapper({id}) {
    const fileSource = getFileSource(id)

    return(
        <div className="pdf-wrapper mx-auto w-full max-w-[850px] h-full">
            <iframe 
                src={fileSource} 
                className="h-full w-full border border-solid border-black bg-gray-100" 
                allow={"autoplay"}
                style={{ height: 'calc(100vh - 95px)' }}
            >
            </iframe>
        </div>
    )
}

PdfWrapper.propTypes = {
    id: PropTypes.string.isRequired
}

export default PdfWrapper;