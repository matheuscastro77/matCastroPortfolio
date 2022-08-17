import React from "react";
import { Main, Container } from "./styled";
import about from "../../assets/about.svg";

const About = () => {
  return (
    <Main>
      <Container>
        <div>
          <h2>Sobre mim</h2>
          <h3>
            Meu nome é Matheus Castro, sou um Desenvolvedor Front-end com
            formação pela Labenu. Atualmente desenvolvo sites com HTML, CSS,
            JavaScript. Possuo conhecimentos também em Git, React, Redux, Api Restfull,
            Styled-Components, Hooks.</h3>
            <h3> Todo o meu curso é guiado via metodoogias ágeis,
            Kanban/Scrum, além disso, possuo experiências também com Node, Knex,
            TypeScript, MySQL entre outras tecnologias.</h3>
            <h3> Eu decidi migrar para a área de desenvolvimento web pois aqui
            eu consegui encontrar algo que realmente me da prazer em aprender e
            trabalhar todos os dias.
          </h3>
        </div>
        <img src={about} />
      </Container>
    </Main>
  );
};

export default About;
