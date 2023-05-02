import { useParams } from "react-router-dom";
import Section from "../components/Section";
import "./sobre.css";

export default function Sobre() {
  const { id } = useParams();

  return (
    <>
      <Section titulo="">
        <div class="container00">
          <div class="img-bonde">
            <img src="BondeCoffee01.png" />
          </div>
          <div class="texto1">
            <h1>A Consagrada Histótia!</h1>
            <p>
              A Coffee Gang é uma marca que nasceu da paixão pelo café e pelos
              produtos de tabacaria. Nosso objetivo é oferecer uma experiência
              única e satisfatória para os apreciadores dessas duas culturas,
              através de produtos de qualidade, inovação e criatividade. Nosso
              café é cuidadosamente selecionado entre os melhores produtores do
              Brasil e do mundo, sendo torrado artesanalmente para garantir um
              sabor intenso e único. Além disso, oferecemos diferentes opções de
              preparo, desde o café espresso até o método Chemex, para atender
              aos diferentes gostos e preferências dos nossos clientes.
            </p>
          </div>
        </div>
        <div class="container01">
          <div class="imgoutfit">
            <img src="LojaFisicaSobre.png" />
          </div>
          <div class="texto2">
            <p>
              Na nossa loja de produtos de tabacaria, você encontrará uma
              variedade de opções para satisfazer os mais diversos gostos e
              estilos. Trabalhamos com marcas reconhecidas e respeitadas no
              mercado, garantindo qualidade e segurança para nossos clientes.
              Além disso, Nossos produtos são produzidos com matérias-primas de
              alta qualidade e de origem sustentável, e apoiamos projetos
              sociais em comunidades produtoras de café. Nosso compromisso é
              oferecer uma experiência completa e memorável para todos os nossos
              clientes, desde o momento da escolha até o momento de degustação.
              Seja bem-vindo à Coffee Gang, onde o café e a tabacaria são mais
              do que um hábito, são uma paixão.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
