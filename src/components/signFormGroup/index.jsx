import React from "react";

export default function SignFormGroup(props) {
  return (
    <div className="input-group mb-3">
      <span
        className="input-group-text rounded-0 bg-transparent sign-border p-0"
        id={props.id}
      >
        <span className="material-icons">{props.label.content}</span>
      </span>
      <input
        type="text"
        className="form-control rounded-0 sign-border"
        placeholder={props.children}
        aria-label={props.children}
        aria-describedby={props.id}
      />
    </div>
  );
}
