import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultCitiesContextProvider } from "./context/DefaultCitiesContext";
import { SearchCitiesProvider } from "./context/SearchCitiesContext";
ReactDOM.render(
  <React.StrictMode>
    <DefaultCitiesContextProvider>
      <SearchCitiesProvider>
        <App />
      </SearchCitiesProvider>
    </DefaultCitiesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
