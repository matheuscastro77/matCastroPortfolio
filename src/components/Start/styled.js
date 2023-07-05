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

  @media screen and (max-width: 414px) {
    height: 100vh;
  }

  span{

    :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.25s ease 0s;
  }
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
    text-align: center;

    h1 {
      font-size: 2.8rem;
      margin: 5px 0px 5px 0px;

      @media screen and (max-width: 1768px) {
        font-size: 2.6rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 2.2rem;
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
    }

    h3 {
      font-size: 1.6rem;
      margin: 5px 0px 5px 0px;
      text-align: center;

      @media screen and (max-width: 1768px) {
        font-size: 1.4rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 1.2rem;
      }
  }
}
  @media screen and (max-width: 414px) {
    margin-top: 15%;
    display: flex;
    flex-direction: column;
  }

`

export const ImgDev = styled.img`
  width: 50%;

  @media screen and (max-width: 414px) {
    margin-top: 35%;
    width: 100%;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;

  @media screen and (max-width: 414px) {
    width: 98%;
    padding-left: 20%;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.25s ease 0s;
  }
`;

export const Img = styled.img`
  width: 40%;

  @media screen and (max-width: 1366px) {
    width: 30%;
  }

  @media screen and (max-width: 414px) {
    width: 35%;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  background-color: transparent;
  height: 5.5vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin-top: 20%;
  border-radius: 10px

`
