import React from "react";
import { Link } from "react-router-dom";

export default function SignImage(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <figure>
          <img src={props.image.src} alt={props.image.alt} />
        </figure>
      </div>
      <div>
        <Link to={props.link.to}>{props.link.text}</Link>
      </div>
    </div>
  );
}
