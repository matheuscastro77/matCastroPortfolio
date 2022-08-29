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

  h2 {
    color: #E6E6E6;
    font-size: 1.8rem;
  }
`;

export const Body = styled.body`
  width: 80%;
  display: flex;
  justify-content: space-between;

  img {
    width: 40%;
    height: 115%;
  }
`;

export const ContainerProjects = styled.div`
  width: 51.5%;
  text-align: center;
  max-height: 70vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 50px;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 1%;

  ::-webkit-scrollbar-track {
    background-color: #E6E6E6;
    width: 7 0%;
  }
  ::-webkit-scrollbar {
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #13131F;
    width: 30%;
  }
`

export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  height: 28vh;
  width: 19.5vw;
  background-color: #2f2e41;
  align-items: center;
  color: #E6E6E6;

  img {
    width: 100%;
    height: 60%;
  }

  div{
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  button {
    border: 2px solid #E6E6E6;
    background-color: transparent;
    color: #E6E6E6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

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
