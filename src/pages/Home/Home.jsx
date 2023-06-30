import React, { useRef } from "react";
import { Main, Nav, Button, ButtonMenu, DivModal, NavMenu, ButtonClose} from "./styled";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
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
          <Button onClick={scrollToStart}> Home </Button>
          <Button onClick={scrollToAbout}> About </Button>
          <Button onClick={scrollToAbility}> Skills </Button>
          <Button onClick={scrollToProject}> Projects </Button>
          <Button onClick={scrollToContact}> Contact </Button>
          </container>
        </div>
        {menu ? <DivModal>
          <ButtonClose onClick={() => menuIsVisible()}>X</ButtonClose>
          <NavMenu>
          <Button onClick={scrollToStart}> Home </Button>
          <Button onClick={scrollToAbout}> About </Button>
          <Button onClick={scrollToAbility}> Skills </Button>
          <Button onClick={scrollToProject}> Projects </Button>
          <Button onClick={scrollToContact}> Contact </Button>
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
        <Skills />{" "}
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
