import React from "react";

export default function SignFormGroup(props) {
  return (
    <div className="input-group mb-3 mw-100">
      <span
        className="input-group-text rounded-0 bg-transparent sign-border p-0"
        id={props.id}
      >
        <span
          className={
            props.label.outlined ? "material-icons-outlined" : "material-icons"
          }
        >
          {props.label.content}
        </span>
      </span>
      <input
        type={props.type ? props.type : "text"}
        autoComplete={props.autoComplete ? props.autoComplete : "off"}
        className="form-control rounded-0 sign-border"
        placeholder={props.children}
        aria-label={props.children}
        aria-describedby={props.id}
      />
    </div>
  );
}
