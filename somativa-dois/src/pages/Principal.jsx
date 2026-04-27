import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Principal() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function buscarUsuario() {
      const usuarioLogado = auth.currentUser;

      if (usuarioLogado) {
        const documento = await getDoc(doc(db, "usuarios", usuarioLogado.uid));

        if (documento.exists()) {
          setUsuario(documento.data());
        }
      }
    }

    buscarUsuario();
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>

      {usuario ? (
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Sobrenome: {usuario.sobrenome}</p>
          <p>Data de nascimento: {usuario.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
}

export default Principal;