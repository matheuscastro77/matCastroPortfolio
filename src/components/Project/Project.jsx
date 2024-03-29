/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import covidDaily from "../../assets/covid-daily.png";
import pokemon from "../../assets/pokemon.png";
import slaca from "../../assets/slaca.png";
import timeTunes from "../../assets/timeTunes.png";
import netflix from "../../assets/netflix.png";
import ecommerce from "../../assets/ecommerce.png";
import apexcharts from "../../assets/apexcharts.png";
import fox3d from "../../assets/fox3d.png";
import among from "../../assets/among.png";
import animatedGalaxy from "../../assets/animatedGalaxy.png";
import postprocessing from "../../assets/postprocessing.png";
import house from "../../assets/house.png";
import portal from "../../assets/portal.png";
import game from "../../assets/game.png";
import funPortifolio from "../../assets/funPortifolio.png";
import project from "../../assets/project.svg";
import {
  Main,
  Body,
  BoxProject,
  ContainerProjects,
  Container,
  Img,
} from "./styled";

const Project = () => {
  return (
    <Main>
      <Body>
        <ContainerProjects>
          <h2>Projects</h2>
          <Container>
            <BoxProject>
              <img src={netflix} />
              <h3>Netflix Clone With Trailers</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/netflix-Clone"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://netflix-clone-with-trailer.vercel.app/"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={game} />
              <h3>Marble Race</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/marble-race"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://marble-race-mtvc.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={house} />
              <h3>Haunted House</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/haunted-house"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://haunted-house-ochre.vercel.app/"
                  target="_blank"
                >
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
              <img src={funPortifolio} />
              <h3>Fun Portifolio</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/fun-portfolio"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://fun-portfolio-five.vercel.app/"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            / ------------------------------- /
            <BoxProject>
              <img src={timeTunes} />
              <h3>Time Tunes Ecommerce</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/ecommerce-TimeTunes"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://timetunes.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={among} />
              <h3>Among US Ar 3D</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/amongUs-3d"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a href="https://among-us-3d.vercel.app/" target="_blank">
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={fox3d} />
              <h3>Fox Ar 3D 8th Wall</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/Fox-AR-3d"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://github.com/matheuscastro77/Fox-AR-3d"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={animatedGalaxy} />
              <h3>Animated Galaxy</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/animated-galaxy"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://animated-galaxy-murex.vercel.app/"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={postprocessing} />
              <h3>Post Processing</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/post-processing"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://post-processing-lemon.vercel.app/"
                  target="_blank"
                >
                  <button>Demo</button>
                </a>
              </div>
            </BoxProject>
            <BoxProject>
              <img src={portal} />
              <h3>Portal Scene</h3>
              <div>
                <a
                  href="https://github.com/matheuscastro77/fun-and-simple-portfolio-with-r3f"
                  target="_blank"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://fun-and-simple-portfolio-with-r3f.vercel.app/"
                  target="_blank"
                >
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
          </Container>
        </ContainerProjects>
        <Img src={project} />
      </Body>
    </Main>
  );
};

export default Project;
