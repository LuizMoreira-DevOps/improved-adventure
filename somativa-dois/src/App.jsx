import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;