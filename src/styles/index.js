import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #f8f8f8;
    background-attachment: fixed;
    font-family: "Poppins", sans-serif;
  }
`;
