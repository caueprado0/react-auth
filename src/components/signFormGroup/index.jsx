import React from "react";

import { FormGroup, Label, Input } from "./styles";

export default function SignFormGroup(props) {
  return (
    <FormGroup className="mt-1 d-block">
      {props.invertedComponents ? (
        <>
          <Input
            type={props.type || "text"}
            id={props.id}
            placeholder={props.children}
          />
          <Label htmlFor={props.id}>
            {Boolean(props.label.content) && (
              <span className="material-icons">{props.label.content}</span>
            )}
            {props.label?.value}
          </Label>
        </>
      ) : (
        <>
          <Label htmlFor={props.id}>
            {Boolean(props.label.content) && (
              <span className="material-icons">{props.label.content}</span>
            )}
            {props.label?.value}
          </Label>
          <Input
            type={props.type || "text"}
            id={props.id}
            placeholder={props.children}
          />
        </>
      )}
    </FormGroup>
  );
}
