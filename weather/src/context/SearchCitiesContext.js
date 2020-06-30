import React, { useState, createContext } from "react";

export const SearchCitiesContext = createContext();

export const SearchCitiesProvider = (props) => {
  const [citySearchData, setCitySearchData] = useState();

  return (
    <SearchCitiesContext.Provider value={[citySearchData, setCitySearchData]}>
      {props.children}
    </SearchCitiesContext.Provider>
  );
};
