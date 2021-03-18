import React from "react";
import { FormContent, FormTitle } from "./styles";

export default function SignForm(props) {
  return (
    <FormContent className="d-flex flex-column">
      <FormTitle>{props.title}</FormTitle>
      <form autoComplete="off">{props.children}</form>
    </FormContent>
  );
}
