import Section from "../components/Section";
import { Navigate, NavLink } from "react-router-dom";
import "./planos.css";

export default function Planos() {
  return (
    <>
      <Section titulo="">
        <div class="conteudo00">
          <div classs="img01home">
            <img src="canecaCoffee.png" />
          </div>
          <div class="text1home">
            <h1>O Cara do Coffee</h1>
            <p>
              A mistery box Coffee é uma mistery box de assinatura mensal focada
              no parsa que curte um cafézinho. Dentro dela irá acompanhar: 1
              pacote de pó sortido do café Coffee Gang 1 caneca coffe gang
              aleatória Maneira 1 camiseta aleatória da coffee gang adesivos e
              muitos outros brindes surpresa.
            </p>
            <button>Tô Dentro parça!</button>
          </div>
        </div>
        <div class="conteudo01">
          <div class="img02Home">
            <img src="tobacosignature.png" />
          </div>
          <div class="text02home">
            <h1>O Cara do Gang</h1>
            <p>
              A mistery box Gang é uma mistery box de assinatura mensal focada
              no parsa que curte um fuminho maneiro. Dentro dela irá conter: 3
              pacotes de sortidos do tabaco Coffee Gang 3 pacotes de seda 1
              pacote de filtro 1 pacote de piteira 1 camiseta aleatória da
              coffee gang adesivos e muitos outros brindes surpresa.
            </p>
            <button>Tô Dentro parça!</button>
          </div>
        </div>
        <div class="conteudo03">
          <div class="img03home">
            <img src="coffeegangsignature.png" />
          </div>
          <div class="text3home">
            <h1>O Cara do Coffee Gang</h1>
            <p>
              A mistery box coffe Gang é uma mistery box de assinatura mensal
              focada no parsa que curte um fuminho maneiro e tbm o cafézinho.
              Dentro dela irá conter: Mistery box O cara do Coffee Mistery box O
              cara do Gang
            </p>
            <button>Tô Dentro parça!</button>
          </div>
        </div>
      </Section>
    </>
  );
}
