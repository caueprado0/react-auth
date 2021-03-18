import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    color: #333;
  }


  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    background-color: #f8f8f8;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Poppins", sans-serif;
  }

  .min-h-100 {
    min-height: 100%;
  }

  .top-0 {
    top: 0;
  }

  .bottom-0 {
    bottom: 0
  }
`;
