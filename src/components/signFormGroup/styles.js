import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const Label = styled.label`
  display: block;

  height: 23px;
  line-height: 23.4px;

  position: absolute;
  left: 0;
  top: 50%;

  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);

  color: #222;
`;

export const Input = styled.input`
  cursor: auto;

  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;

  outline: none;
`;
