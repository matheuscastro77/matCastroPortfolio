import styled from "styled-components";

export const Main = styled.div``;

export const Body = styled.body`
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: red;
    border-radius: 3px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: yellow;
    border-radius: 3px;
  }
`;

export const Nav = styled.div`
  background-color: transparent;
  color: white;
  width: 100%;
  height: 7vh;
  position: fixed;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 78%;
    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

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

      button {
        border: 0px;
        background-color: transparent;
        height: 2.5vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;

        :hover {
          cursor: pointer;
          transform: scale(1.05);
          transition: all 0.25s ease 0s;
        }
      }
    }
  }
`;
