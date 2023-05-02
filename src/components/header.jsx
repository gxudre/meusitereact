import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const navigate = useNavigate();

  function handleClick(event) {
    props.onLogout();
    navigate("/login");
  }
  return (
    <header class="header">
      <nav>
        <ul class="paginas">
          <li>
            <NavLink to="/home">
              <img src="LogoCoffeeGang.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to={`/sobre/${props.usuarioID}`}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/planos">Planos</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>{/* <button onClick={handleClick}>Sair</button> */}</li>
        </ul>
      </nav>
    </header>
  );
}
