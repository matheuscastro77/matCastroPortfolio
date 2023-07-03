import React from "react";
import { Main, Container } from "./styled";
import about from "../../assets/about.svg";

const About = () => {
  return (
    <Main>
      <Container>
        <div>
          <h2>About me</h2>
          <h3>
            My name is Matheus Castro. I'm a Front-end Developer formed by
            Labenu. I currently work with React, ThreeJs, JavaScript, HTML, and
            CSS. I also have knowledge in Git, Redux, Api Restful,
            Styled-Components, and Hooks.
          </h3>
          <h3>
            {" "}
            My entire course was guided by agile methodologies, Kanban/Scrum, in
            addition, I have some experience in Node, Knex, TypeScript, and
            MySQL among other technologies.
          </h3>
          <h3>
            {" "}
            I decided to migrate to the area of ​​web development because here I
            managed to find something that gives me pleasure in learning and
            working every day.
          </h3>
        </div>
        <img src={about} />
      </Container>
    </Main>
  );
};

export default About;
