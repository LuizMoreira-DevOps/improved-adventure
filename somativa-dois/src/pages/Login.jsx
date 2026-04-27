import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function acessarSistema() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (error) {
        console.log(error);
      setMensagem("Usuário não cadastrado ou dados incorretos.");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={acessarSistema}>Acessar Principal</button>

      <p>{mensagem}</p>
    </div>
  );
}

export default Login;