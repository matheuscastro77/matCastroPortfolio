import React from "react";
import { Main, Container, BoxAbilitys, BoxImg } from "./styled";
import abilitys from "../../assets/static.svg";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import html from "../../assets/html.png";
import react2 from "../../assets/react2.png";
import threejs from "../../assets/threejs.png";

const Abilitys = () => {
  return (
    <Main>
      <Container>
        <img src={abilitys} />
        <BoxAbilitys>
          <h2>Habilidades</h2>
          <BoxImg>
          <div>
            <img src={css} />
          </div>
          <div>
            <img src={ts} />
          </div>
          <div>
            <img src={js} />
          </div>
          <div>
            <img src={html} />
          </div>
          <div>
            <img src={react2} />
          </div>
          <div>
            <img src={threejs} />
          </div>
          </BoxImg>
        </BoxAbilitys>
        
      </Container>
    </Main>
  );
};

export default Abilitys;
