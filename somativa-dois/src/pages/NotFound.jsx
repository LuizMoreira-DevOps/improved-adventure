import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>

      <p>Esta URL não existe na aplicação.</p>

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default NotFound;