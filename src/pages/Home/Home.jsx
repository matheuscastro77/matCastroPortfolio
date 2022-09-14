import React, { useRef } from "react";
import { Main, Nav, Button, ButtonMenu, DivModal, NavMenu, ButtonClose} from "./styled";
import About from "../../components/About/About";
import Abilitys from "../../components/Abilitys/Abilitys";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";
import Start from "../../components/Start/Start";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import GlobalStateContext from '../../context/GlobalStateContext'


const Home = () => {

  const { menu, setMenu } = useContext(GlobalStateContext)

  const ScrollStart = useRef(null);
  const ScrollAbout = useRef(null);
  const ScrollAbility = useRef(null);
  const ScrollProject = useRef(null);
  const ScrollContact = useRef(null);

  const scrollToStart = () => {
    ScrollStart.current.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  const scrollToAbout = () => {
    ScrollAbout.current.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  const scrollToAbility = () => {
    ScrollAbility.current.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  const scrollToProject = () => {
    ScrollProject.current.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  const scrollToContact = () => {
    ScrollContact.current.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  const menuIsVisible = () => {
    setMenu(!menu)
  }

  return (
    <Main>
      <Nav>
        <div>
          <h1>Matheus Castro</h1>
          <ButtonMenu onClick={() => menuIsVisible()}><MenuIcon sx={{ fontSize: '28px', color: 'white' }}/></ButtonMenu>
          <container>
          <Button onClick={scrollToStart}> Início </Button>
          <Button onClick={scrollToAbout}> Sobre </Button>
          <Button onClick={scrollToAbility}> Habilidades </Button>
          <Button onClick={scrollToProject}> Projetos </Button>
          <Button onClick={scrollToContact}> Contato </Button>
          </container>
        </div>
        {menu ? <DivModal>
          <ButtonClose onClick={() => menuIsVisible()}>X</ButtonClose>
          <NavMenu>
          <Button onClick={scrollToStart}> Início </Button>
          <Button onClick={scrollToAbout}> Sobre </Button>
          <Button onClick={scrollToAbility}> Habilidades </Button>
          <Button onClick={scrollToProject}> Projetos </Button>
          <Button onClick={scrollToContact}> Contato </Button>
          </NavMenu>
        </DivModal> : null}
      </Nav>
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
    </Main>
  );
};

export default Home;
