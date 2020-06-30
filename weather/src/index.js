import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultCitiesContextProvider } from "./context/DefaultCitiesContext";

ReactDOM.render(
  <React.StrictMode>
    <DefaultCitiesContextProvider>
      <App />
    </DefaultCitiesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
