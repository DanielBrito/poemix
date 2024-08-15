import aLerVaziosThumb from "../../assets/books/a_ler_vazios.webp";
import protestizando from "../../assets/books/protestizando.webp";
import "./PublishedBooksList.css";

function PublishedBooksList() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 wrapper">
      <div className="w-full h-full">
        <img
          src={aLerVaziosThumb}
          className="w-full h-full object-cover thumb"
        />
      </div>
      <div className="w-full h-full">
        <img src={protestizando} className="w-full h-full object-cover thumb" />
      </div>
    </div>
  );
}

export default PublishedBooksList;
