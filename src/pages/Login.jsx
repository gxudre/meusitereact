import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Header from "../components/Header";
import "./login.css";
import Footer from "../components/Footer";

export default function Login(props) {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  function handleClick(event) {
    props.onLogin();
    navigate("/home");
  }

  function handleFocus(event) {
    console.log("entrar no campo email");
  }

  function handleBlur(event) {
    console.log("saiu do campo email");
  }

  function handleChance(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <Header />
      <div class="login">
        <div class="login-padrin">
          <h1>Arroche esse login padrin</h1>
        </div>
        <div class="FormLogin">
          <Section titulo="Login">
            <p>{email}</p>
            <input
              type="email"
              placeholder="E-mail"
              onChange={handleChance}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span class="forgot">esqueceu o e-mail?</span>
            <input type="password" placeholder="Senha" />
            <span class="forgot">esqueceu a senha?</span>
            <button onClick={handleClick}>Entrar</button>
            <button>Criar Conta</button>
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
}
