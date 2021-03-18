import React from "react";

import Routes from "src/config/routes";

import GlobalStyles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container-fluid p-0 w-100 vh-100">
      <Routes />
      <GlobalStyles />
    </div>
  );
}
