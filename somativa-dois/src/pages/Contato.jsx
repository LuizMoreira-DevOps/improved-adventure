import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Contato</h1>

      <p>Nome: Luiz Fernando</p>
      <p>E-mail: luiz.moreira1@pucpr.edu.br</p>

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Contato;