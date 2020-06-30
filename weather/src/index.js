import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";

ReactDOM.render(
  <DefaultCitiesProvider>
    <App />
  </DefaultCitiesProvider>,
  document.getElementById("root")
);
