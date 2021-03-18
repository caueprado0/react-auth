import React from "react";

import Routes from "src/config/routes";

import GlobalStyles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="d-flex min-h-100 justify-content-center align-items-center">
      <div className="d-block w-100">
        <div className="d-flex justify-content-center align-items-center">
          <Routes />
          <GlobalStyles />
        </div>
      </div>
    </div>
  );
}
