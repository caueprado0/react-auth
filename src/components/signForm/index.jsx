import React from "react";
import { FormTitle } from "./styles";

export default function SignForm(props) {
  return (
    <div className="d-flex flex-column align-items-center px-lg-80 px-4">
      <FormTitle className="align-self-start">{props.title}</FormTitle>
      <form className="w-100" autoComplete="off">
        {props.children}
      </form>
    </div>
  );
}
