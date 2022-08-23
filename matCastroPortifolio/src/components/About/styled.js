import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: #E6E6E6;
    text-align: center;
    width: 60%;

    h2{
      font-size: 1.8rem;
      margin-bottom: 7%;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  img{
    width: 30%;
  }
`
