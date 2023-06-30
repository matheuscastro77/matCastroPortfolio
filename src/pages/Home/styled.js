import styled from "styled-components";

export const Main = styled.main`
  overflow-x: hidden;
`;

export const Nav = styled.nav`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  color: white;
  width: 100%;
  height: 6vh;
  position: fixed;
  display: flex;
  justify-content: center;
  border-bottom: 1px groove white;
  z-index: 1;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1440px) {
      width: 90%;
    }

    @media screen and (max-width: 414px) {
      width: 100%;
    }
    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

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

      :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.25s ease 0s;
      }
    }

    container {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.25s ease 0s;
      }

      @media screen and (max-width: 414px) {
        display: none;
      }
    }
  }
`;

export const Button = styled.button`
  border: 0px;
  background-color: transparent;
  height: 2.5vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;

 

  @media screen and (max-width: 1600px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1176px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.5rem;
  }


`;

export const ButtonMenu = styled.button`
  border: 0px;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 415px) {
    display: none;
  }
`;

export const DivModal = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 10;
  background-color: rgba(1, 1, 1, 0.6);
  display: flex;
  flex-direction: column;
`;

export const ButtonClose = styled.button`
  border: 0px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  margin-top: -45%;
  margin-left: 80%;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const NavMenu = styled.nav`
  margin-top: -70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
`;