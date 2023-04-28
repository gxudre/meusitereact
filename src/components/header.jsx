import { NavLink, useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate()

  function handleClick(event) {
    props.onLogout()
    navigate("/login")
  }
    return(
        <header>
      <nav>
        <ul>
          <li><NavLink to="/"><img src="LogoCoffeeGang.png"/></NavLink></li>
          <li><NavLink to="/pedidos">Meus Pedidos</NavLink></li>
          <li><NavLink to="/novo">Novo Pedido</NavLink></li>
          <li><NavLink to="/sobre">Sobre</NavLink></li>
          <li><button onClick={handleClick}>Sair</button></li>
        </ul>
      </nav>
    </header>
    )
}