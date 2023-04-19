import Home from "../pages/Home";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";
import Planos from "../pages/Planos";
import Sobre from "../pages/Sobre";

export default function Principal() {
  return (
    <main>
      <Home />
      <Login />
      <Produtos />
      <Planos />
      <Sobre />
    </main>
  );
}
