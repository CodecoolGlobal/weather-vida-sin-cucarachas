import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavBarThemeContextProvider } from "./theme/NavBarThemeContext";
import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";
import { UnitContextProvider } from "./context/UnitContext";

ReactDOM.render(
  <UnitContextProvider>
    <NavBarThemeContextProvider>
      <DefaultCitiesProvider>
        <App />
      </DefaultCitiesProvider>
    </NavBarThemeContextProvider>
  </UnitContextProvider>,
  document.getElementById("root")
);
