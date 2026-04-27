import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>

      <p>Linguagem: JavaScript</p>
      <p>Biblioteca: React</p>
      <p>Biblioteca de rotas: React Router DOM</p>
      <p>Ferramenta de desenvolvimento: Vite</p>
      <p>Gerenciador de pacotes: npm</p>

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Sobre;