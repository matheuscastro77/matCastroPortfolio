import React from "react";
import covidDaily from "../../assets/covid-daily.png";
import pokemon from "../../assets/pokemon.png";
import slaca from "../../assets/slaca.png";
import meta from "../../assets/meta.png";
import pharma from "../../assets/pharma.png";
import ecommerce from "../../assets/ecommerce.png";
import apexcharts from "../../assets/apexcharts.png";
import project from "../../assets/project.svg";
import { Main, Body, BoxProject, ContainerProjects, Container, Img } from "./styled";

const Project = () => {
  return (
    <Main>
      <Body>
        <ContainerProjects>
          <h2>Meus Projetos</h2>
          <Container>
            <BoxProject>
              <img src={slaca} />
              <h3>Slaca Chuva</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/SlacaChuva"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://slaca-chuva.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={meta} />
              <h3>Meta Feedbacks</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/HackatonMetaFeedback"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://meta-feedback.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={covidDaily} />
              <h3>Covid Daily</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/Challenge-Covid-Daily"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://challenge-covid-daily.vercel.app/"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={apexcharts} />
              <h3>Apex Charts</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/ApexCharts-MINEHR"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://charts-minehr.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={pharma} />
              <h3>Pharma</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/-FrontEndChallenge-COODESH"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://coodesh-pharma.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={pokemon} />
              <h3>Pokédex</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/pokedex"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://pokedex-ebon-iota.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={ecommerce} />
              <h3>Ecommerce</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/commerce"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://upbeat-stop.surge.sh/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
          </Container>
        </ContainerProjects>
        <Img src={project} />
      </Body>
    </Main>
  );
};

export default Project;
