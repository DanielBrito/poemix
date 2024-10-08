import { Link } from 'react-router-dom';

import poemixLogo from '../../assets/homepage/poemix_logo.webp';

export const Logo = () => {
  return (
    <div width="739px" height="263px" className="max-w-[600px]">
      <Link
        to="https://danielbrito.github.io/projetos/#poemix"
        target="_blank"
        rel="noopener noreferrer"
        title="Saiba mais"
        aria-label={`Acessar site pessoal oficial`}
      >
        <img
          src={poemixLogo}
          alt="Poemix representado com cada letra utilizando uma fonte e o X formado por dois livros."
          width="739px"
          height="263px"
        />
      </Link>
    </div>
  );
};
