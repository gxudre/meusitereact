import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Erro404 from "./pages/Erro404";
import Login from "./pages/Login";
import Principal from "./components/Principal";
import "./App.css";
import Produtos from "./pages/produtos";
import Planos from "./pages/planos";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioID, setUsuarioID] = useState();

  function handleLogin() {
    setLogado(true);
    setUsuarioID(100);
  }

  function handleLogout() {
    setLogado(false);
    setUsuarioID(null);
  }
  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <>
            <Route
              path="/"
              element={
                <Principal usuarioID={usuarioID} onLogout={handleLogout} />
              }
            >
              <Route path="home" element={<Home />} />
              <Route path="produtos" element={<Produtos />} />
              <Route path="planos" element={<Planos />} />
              <Route path="sobre/:id" element={<Sobre />} />
            </Route>
          </>
        ) : (
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        )}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}
