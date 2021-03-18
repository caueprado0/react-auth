import React from "react";
import Panel from "src/components/panel";

export default function SignContent(props) {
  return (
    <div className="container h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <Panel>{props.children}</Panel>
      </div>
    </div>
  );
}
