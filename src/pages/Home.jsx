import Section from "../components/Section";
import { Navigate, NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Section titulo="">
        <div class="conteudo00">
          <div class="titulo01">
            <h1>O Melhor do café somado com o melhor do fumo.</h1>
          </div>
          <div classs="img01home">
            <img src="imgCafeHome1.png" />
          </div>
          <div class="text1home">
            <h1>O Café dos Parça</h1>
            <p>
              Um café muito bom é uma bebida que é rica em sabor, aroma e
              textura. Ao sentir o aroma do café, você pode perceber uma mistura
              complexa de notas florais, frutadas, tostadas e terrosas, que
              aumentam a expectativa e o prazer de degustar a bebida.
            </p>
            <button>Saiba Mais</button>
          </div>
        </div>
        <div class="conteudo01">
          <div class="img02Home">
            <img src="imgTabacoHome1.2.png" />
          </div>
          <div class="text02home">
            <h1>O Tabaco dos Parça.</h1>
            <p>
              O processo de cura do tabaco orgânico é cuidadoso e lento,
              permitindo que as folhas sequem naturalmente ao sol, sem o uso de
              produtos químicos ou secadores artificiais. Isso preserva os óleos
              essenciais do tabaco, o que resulta em um aroma mais intenso e um
              sabor mais rico e complexo.
            </p>
            <button>Saiba Mais</button>
          </div>
        </div>
        <div class="conteudo03">
          <div class="img03home">
            <img src="imgOutfitHome1.3.png" />
          </div>
          <div class="text3home">
            <h1>O Outfit dos Parça</h1>
            <p>
              Essa camiseta é perfeita para quem busca um estilo despojado e
              atual, sem abrir mão do conforto e qualidade. Use com jeans,
              shorts ou bermudas para criar um look casual e descontraído, ou
              combine com peças mais formais para um visual moderno e autêntico.
            </p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </Section>
    </>
  );
}
