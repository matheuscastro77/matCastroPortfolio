import React, { useRef } from "react";
import { Main, Nav, Body } from "./styled";
import About from "../../components/About/About";
import Abilitys from "../../components/Abilitys/Abilitys";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";
import Start from "../../components/Start/Start";

const Home = () => {

  const ScrollStart = useRef(null);
  const ScrollAbout = useRef(null);
  const ScrollAbility = useRef(null);
  const ScrollProject = useRef(null);
  const ScrollContact = useRef(null);

  const scrollToStart = () => ScrollStart.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => ScrollAbout.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAbility = () => ScrollAbility.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () => ScrollProject.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => ScrollContact.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Main>
      <Nav>
        <div>
          <h1>Matheus Castro</h1>
          <container>
          <button onClick={scrollToStart}> Início </button>
          <button onClick={scrollToAbout}> Sobre </button>
          <button onClick={scrollToAbility}> Habilidades </button>
          <button onClick={scrollToProject}> Projetos </button>
          <button onClick={scrollToContact}> Contato </button>
          </container>
        </div>
      </Nav>
      <Body>
        <div ref={ScrollStart}>
          <Start />
        </div>

      <div ref={ScrollAbout}>
        {" "}
        <About />{" "}
      </div>
      <div ref={ScrollAbility}>
        {" "}
        <Abilitys />{" "}
      </div>
      <div ref={ScrollProject}>
        {" "}
        <Project />{" "}
      </div>
      <div ref={ScrollContact}>
        {" "}
        <Contact />{" "}
      </div>
      </Body>
    </Main>
  );
};

export default Home;
