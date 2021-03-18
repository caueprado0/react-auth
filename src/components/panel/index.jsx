import React from "react";
import { Panel as PanelComponent } from "./styles";

export default function Panel(props) {
  return (
    <PanelComponent>
      <div className="d-flex">{props.children}</div>
    </PanelComponent>
  );
}
