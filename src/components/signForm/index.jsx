import React from "react";
import { FormTitle } from "./styles";

export default function SignForm(props) {
  return (
    <div className="d-flex flex-column align-items-center pl-4 pr-4">
      <FormTitle>{props.title}</FormTitle>
      <form className="w-100" autoComplete="off">
        {props.children}
      </form>
    </div>
  );
}
