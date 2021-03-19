import React from "react";

export default function SignCheckbox(props) {
  return (
    <div className="d-flex align-items-center">
      <input
        type="checkbox"
        name="remember-me"
        id={props.id}
        className="agree-term"
      />
      <label htmlFor={props.id} className="label-agree-term">
        <span />
        {props.children}
      </label>
    </div>
  );
}
