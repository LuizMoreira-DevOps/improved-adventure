import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  async function cadastrarUsuario() {
    try {
      const usuarioCriado = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const uid = usuarioCriado.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        uid: uid,
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
      });

      setMensagem("Usuário cadastrado com sucesso!");

      setEmail("");
      setSenha("");
      setNome("");
      setSobrenome("");
      setDataNascimento("");

      navigate("/login");
    } catch (error) {
      setMensagem("Erro ao cadastrar usuário: " + error.message);
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>

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

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />

      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />

      <button onClick={cadastrarUsuario}>Cadastrar</button>

      <button onClick={() => navigate("/login")}>Ir para Login</button>

      <p>{mensagem}</p>
    </div>
  );
}

export default Cadastro;