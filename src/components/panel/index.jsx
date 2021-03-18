import React from "react";
import { Panel as PanelComponent } from "./styles";

export default function Panel(props) {
  return (
    <PanelComponent className="w-100 my-5 my-lg-0 mx-3 mx-lg-0">
      {props.children}
    </PanelComponent>
  );
}
