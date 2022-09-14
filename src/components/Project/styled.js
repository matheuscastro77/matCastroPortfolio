import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1366px) {
    height: 95vh;
  }

  @media screen and (max-width: 1280px) {
    height: 80vh;
  }

  @media screen and (max-height: 800px) {
    height: 90vh;
  }

  h2 {
    color: #e6e6e6;
    font-size: 1.8rem;

    @media screen and (max-width: 1440px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 1366px) {
      font-size: 1.4rem;
    }

    @media screen and (max-height: 800px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 360px) {
    margin-bottom: 10%;
    }
  }

  @media screen and (max-width: 360px) {
    height: 70vh;
    }
`;

export const Body = styled.body`
  width: 80%;
  display: flex;
  justify-content: space-between;

  /* img {
    width: 40%;
    height: 115%;

    @media screen and (max-width: 1366px) {
      height: 130%;
    }

    @media screen and (max-width: 1280px) {
      height: 110%;
    }
  } */

  @media screen and (max-width: 360px) {
    width: 90%;
    flex-direction: column;
    }
`;

export const Img = styled.img`
  width: 40%;
    height: 115%;

    @media screen and (max-width: 1366px) {
      height: 130%;
    }

    @media screen and (max-width: 1280px) {
      height: 110%;
    }

    @media screen and (max-width: 360px) {
      /* width: 90%;
      margin: 0 auto; */
      display: none;
    }
`

export const ContainerProjects = styled.div`
  width: 51.5%;
  text-align: center;
  max-height: 70vh;
  
  @media screen and (max-width: 360px) {
    width: 100%;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 50px;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 2%;

  @media screen and (max-width: 360px) {
    padding-bottom: 8%;
    grid-gap: 15px 30px;
/*     margin-bottom: 10%; */
  }


  ::-webkit-scrollbar-track {
    background-color: #3f3d56;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 10px;
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  height: 28vh;
  width: 19.5vw;
  background-color: #2f2e41;
  align-items: center;
  color: #e6e6e6;

  @media screen and (max-width: 1600px) {
    height: 30vh;
  }

  @media screen and (max-width: 1366px) {
    height: 31vh;
  }

  @media screen and (max-width: 1280px) {
    height: 24vh;
  }

  @media screen and (max-height: 768px) {
    height: 28vh;
  }

  @media screen and (max-width: 360px) {
    width: 50vw;
    height: 26vh;
  }

  img {
    width: 100%;
    height: 60%;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 360px) {
      width: 70%;
  }
  }

  h3 {
    @media screen and (max-width: 1768px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 1366px) {
      font-size: 1rem;
    }
  }

  button {
    border: 2px solid #e6e6e6;
    background-color: transparent;
    color: #e6e6e6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    @media screen and (max-width: 1768px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 1366px) {
      font-size: 0.9rem;
      border: 1px solid #e6e6e6;
      margin-bottom: 1%;
    }

    @media screen and (max-width: 360px) {
      font-size: 0.8rem;
  }

    :hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.25s ease 0.25s;
    }
  }

  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease 0s;
  }
`;
