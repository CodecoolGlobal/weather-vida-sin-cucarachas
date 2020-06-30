import React, { useState, createContext } from "react";

export const SearchCitiesContext = createContext();

export const SearchCitiesProvider = (props) => {
  const [cityData, setCityData] = useState([]);

  return (
    <SearchCitiesContext.Provider value={[cityData, setCityData]}>
      {props.children}
    </SearchCitiesContext.Provider>
  );
};
