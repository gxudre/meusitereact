import Section from "../components/Section";
import { Navigate, NavLink } from "react-router-dom";
import "./produtos.css";

export default function Produtos() {
  return (
    <>
      <Section titulo="">
        <div class="conteudo00">
          <div class="titulo01">
            <h1>Os Produtos Maneiros</h1>
          </div>
          <div classs="img01home">
            <img src="PacotaoCoffee.png" />
          </div>
          <div class="text1home">
            <h1>O Café Coffee Gang</h1>
            <p>
              Um dos tipos de café mais valorizados e reconhecidos é o café
              arábica. Os grãos de café arábica são conhecidos por ter um sabor
              suave e rico, com uma acidez equilibrada e notas de frutas e
              flores. Eles são colhidos à mão e cuidadosamente selecionados para
              garantir a melhor qualidade possível.
            </p>
            <button>Vokerer Mano!</button>
          </div>
        </div>
        <div class="conteudo01">
          <div class="img02Home">
            <img src="conteudo02img.png" />
          </div>
          <div class="text02home">
            <h1>O Tabaco Coffee Gang</h1>
            <p>
              O Virginia Blend é um tipo popular de tabaco para fumar, conhecido
              por sua suavidade e aroma doce. Nossa loja oferece um Virginia
              Blend premium, que é composto por uma mistura cuidadosamente
              selecionada de tabacos Virginia e Burley. Essa combinação resulta
              em um tabaco macio e saboroso, com uma queima uniforme e fácil de
              fumar.
            </p>
            <button>Vokerer Mano!</button>
          </div>
        </div>
        <div class="conteudo03">
          <div class="img03home">
            <img src="kitsmokecoffee.png" />
          </div>
          <div class="text3home">
            <h1>O Rolling paper Coffee Gang</h1>
            <p>
              Na Coffe Gang, temos uma grande variedade de sedas para atender a
              todos os gostos. Nossas sedas são produzidas com papel de alta
              qualidade, garantindo uma queima uniforme e suave. Oferecemos
              diferentes tipos de sedas, incluindo sedas brancas e
              transparentes, com espessuras variadas, para que cada cliente
              possa escolher a opção que melhor se adapta às suas necessidades.
            </p>
            <button class="btn-roxo">Vokerer Mano!</button>
          </div>
        </div>
        <div class="conteudo04">
          <div class="img04Home">
            <img src="kitFumante.png" />
          </div>
          <div class="text4home">
            <h1>O kit Coffee Gang</h1>
            <p>
              O kit Coffe Gang Um estojo para ter todos os apetrechos sempre à
              mão na hora de bolar o seu fininho! Estojo pequeno e discreto que
              quase não ocupa espaço.O kit vem com: 1 Cuia de Silicone; 1 Seda
              Bem Bolado King Size Slim; 1 Seda Smoking Rasta King Size; 1
              Piteira de Papel Mona Brisa Medium; 1 Isqueiro Clipper Pequeno; 1
              Tesoura Bud Cutter Dimensões do estojo: 12,5cm x 9cm x 4cm
            </p>
            <button class="btn-roxo">Vokerer Mano!</button>
          </div>
        </div>
      </Section>
    </>
  );
}
