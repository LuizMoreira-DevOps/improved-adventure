import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/contato">
        <button>Contato</button>
      </Link>

      <Link to="/sobre">
        <button>Sobre</button>
      </Link>
    </div>
  );
}

export default Home;