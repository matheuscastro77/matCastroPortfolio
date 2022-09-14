import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1280px) {
    height: 70vh;
  }

  @media screen and (max-height: 800px) {
    height: 100vh;
  }

  @media screen and (max-height: 720px) {
    height: 106vh;
  }
`;

export const Container = styled.div`
  margin-top: 8%;
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: #e6e6e6;
    text-align: left;

    h1 {
      font-size: 2.8rem;
      margin: 5px 0px 5px 0px;

      @media screen and (max-width: 1768px) {
        font-size: 2.6rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 2.2rem;
      }

      @media screen and (max-height: 800px) {
        font-size: 2rem;
      }
    }

    h2 {
      font-size: 1.6rem;
      margin: 5px 0px 5px 0px;

      @media screen and (max-width: 1768px) {
        font-size: 1.1rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 1rem;
      }

      @media screen and (max-height: 800px) {
        font-size: 0.9rem;
      }
    }

    h3 {
      font-size: 1.6rem;
      margin: 5px 0px 5px 0px;

      @media screen and (max-width: 1768px) {
        font-size: 1.4rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 1.2rem;
      }

      @media screen and (max-height: 800px) {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 412px) {
    margin-top: 15%;
    display: flex;
    flex-direction: column;
  }
`;

export const ImgDev = styled.img`
  width: 50%;

  @media screen and (max-width: 412px) {
    margin-top: 35%;
    width: 100%;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;

  @media screen and (max-width: 412px) {
    width: 98%;
    padding-left: 20%;
  }
`;

export const Img = styled.img`
  width: 40%;

  @media screen and (max-width: 1366px) {
    width: 30%;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.25s ease 0s;
  }

  @media screen and (max-width: 412px) {
    width: 35%;
  }
`;
