import React, { useState, createContext } from "react";

export const CatFactContext = createContext();

export const CatFactProvider = (props) => {
  const [catFactData, setCatFactData] = useState("");

  return (
    <CatFactContext.Provider value={[catFactData, setCatFactData]}>
      {props.children}
    </CatFactContext.Provider>
  );
};
