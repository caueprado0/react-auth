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
    font-size: 13px;
    outline: none;
  }

  input.form-control:focus {
    color: -internal-light-dark(black, white);
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    outline: none;
    box-shadow: none;
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

  .sign-border {
    border: none;
    border-bottom: 1px solid #999;
    box-sizing: border-box;
    padding: 6px 12px;

    &:focus {
      border-bottom: 1px solid #999;
    }

    &::-webkit-input-placeholder {
      font-weight: 400;
    }

    &::-moz-placeholder {
      font-weight: 400;
    }

    &::-ms-input-placeholder {
      font-weight: 400;
    }
  }

  input.sign-border {
    font-weight: 500;
  }

  span.material-icons {
    font-size: 18px;
  }

  .px-lg-80 {
    @media (min-width: 992px) {
      padding-left: 80px !important;
      padding-right: 80px !important;
    }
  }

  input[type=checkbox] + label > span {
    box-sizing: content-box;
    line-height: 1.5em;
  }


  input[type=checkbox]:not(old) {
    width: 2em;
    margin: 0;
    padding: 0;
    font-size: 1em;
    display: none;
  }

  input[type=checkbox]:not(old) + label {
    display: inline-block;
    line-height: 1.5em;
    margin-top: 6px
  }

  input[type=checkbox]:not(old) + label > span {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 15px;
    margin-bottom: 3px;
    border: 1px solid #999;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    background: #FFF;
    background-image: -moz-linear-gradient(white, white);
    background-image: -ms-linear-gradient(white, white);
    background-image: -o-linear-gradient(white, white);
    background-image: -webkit-linear-gradient(white, white);
    background-image: linear-gradient(white, white);
    vertical-align: bottom
  }

  input[type=checkbox]:not(old):checked + label > span {
    background-image: -moz-linear-gradient(white, white);
    background-image: -ms-linear-gradient(white, white);
    background-image: -o-linear-gradient(white, white);
    background-image: -webkit-linear-gradient(white, white);
    background-image: linear-gradient(white, white)
  }

  input[type=checkbox]:not(old):checked + label > span:before {
    content: '\f26b';
    display: block;
    color: #222;
    font-size: 11px;
    line-height: 1.2;
    text-align: center;
    font-family: material-design-iconic-font, sans-serif;
    font-weight: 700
  }

  .agree-term {
    display: inline-block;
    width: auto
  }

  .label-agree-term {
    position: relative;
    top: 0;
    transform: translateY(0);
    -moz-transform: translateY(0);
    -webkit-transform: translateY(0);
    -o-transform: translateY(0);
    -ms-transform: translateY(0)
  }

  .material-icons-name {
    font-size: 18px
  }
`;
