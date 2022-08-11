import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: white;
    text-align: center;

    h3 {
      animation: caret 0.5s step-end infinite alternate, type 5s steps(23, end);
    }
  }
`;
