import React, { useState, createContext } from "react";

export const CatFactContext = createContext();

export const CatFactProvider = (props) => {
  const [catFactData, setCatFactData] = useState("Click on me(ow) for a Fact!");

  return (
    <CatFactContext.Provider value={[catFactData, setCatFactData]}>
      {props.children}
    </CatFactContext.Provider>
  );
};
