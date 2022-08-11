import React, { useEffect, useRef, useState } from "react";
import { Main, Nav } from "./styled";
import About from "../../components/2About/About";
import Abilitys from "../../components/3Abilitys/Abilitys";
import Project from "../../components/4Project/Project";
import Contact from "../../components/5Contact/Contact";


const Home = () => {

  const ScrollAbout = useRef(null)
  const ScrollAbility = useRef(null)
  const ScrollProject = useRef(null)
  const ScrollContact = useRef(null)

  const scrollToAbout = () => ScrollAbout.current.scrollIntoView({ behavior: "smooth"});
  const scrollToAbility = () => ScrollAbility.current.scrollIntoView({ behavior: "smooth"});
  const scrollToProject = () => ScrollProject.current.scrollIntoView({ behavior: "smooth"});
  const scrollToContact = () => ScrollContact.current.scrollIntoView({ behavior: "smooth"});
  return <Main>
    
    <Nav>
    <button onClick={scrollToAbout}>About</button>
    <button onClick={scrollToAbility}>Abilitys</button>
    <button onClick={scrollToProject}>Project</button>
    <button onClick={scrollToContact}>Contact</button>
    </Nav>
    

      <div ref={ScrollAbout}> <About/> </div>
      <div ref={ScrollAbility}> <Abilitys/> </div>
      <div ref={ScrollProject}> <Project/> </div>
      <div ref={ScrollContact}> <Contact/> </div>
      </Main>;
};

export default Home;
