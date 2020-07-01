import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";
import { UnitContextProvider } from "./context/UnitContext";

ReactDOM.render(
  <UnitContextProvider>
    <DefaultCitiesProvider>
      <App />
    </DefaultCitiesProvider>
  </UnitContextProvider>,
  document.getElementById("root")
);
