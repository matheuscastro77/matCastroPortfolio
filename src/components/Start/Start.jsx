import React from "react";
import { Main, Container, DivIcons, ImgDev, Img, Button } from "./styled";
import codetyping from "../../assets/codetyping.svg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/e-mail.png";

const Start = () => {
  return (
    <Main>
      <Container>
        <div>
          <h1>Matheus Castro</h1>
          <h3>Front-end Developer</h3>
          <span>
          <a
          href="https://fun-portfolio-five.vercel.app/"
          target="_blank"
        ><Button>Fun Portfolio</Button></a>
          </span>
        </div>
        <ImgDev src={codetyping} />
      </Container>

      <DivIcons>
        <a href="https://github.com/matheuscastro77" target="_blank">
          {" "}
          <Img src={github} />{" "}
        </a>
        <a href="mailto:matheuscastro1997@hotmail.com" target="_blank">
          {" "}
          <Img src={email} />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-castro-541a57140/"
          target="_blank"
        >
          {" "}
          <Img src={linkedin} />{" "}
        </a>
      </DivIcons>
    </Main>
  );
};

export default Start;
