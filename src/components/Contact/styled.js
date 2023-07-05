import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;

  h2 {
    color: #e6e6e6;
    font-size: 1.8rem;

    

    @media screen and (max-width: 1440px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 1366px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 1280px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 1176px) {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 414px) {
    flex-direction: column-reverse;
    width: 90%;
  }
`;

export const ImgPhone = styled.img`
  width: 40%;

  @media screen and (max-width: 414px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const BoxContact = styled.div`
  width: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 414px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 50%;

  @media screen and (max-width: 1768px) {
    width: 40%;
  }

  @media screen and (max-width: 1440px) {
    width: 36%;
  }

  @media screen and (max-width: 1366px) {
    width: 32%;
  }

  @media screen and (max-width: 414px) {
    width: 40%;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.25s ease 0s;
  }
`;
