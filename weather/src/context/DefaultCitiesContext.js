import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DefaultCitiesContext = createContext();

export const DefaultCitiesContextProvider = (props) => {
  const initialCities = [
    "London",
    "Budapest",
    "Tokyo",
    //"Cairo",
    //"New York",
    //"Sydney",
    //"São Paulo",
  ];
  const [defaultCityData, setDefaultCityData] = useState([]);
  const [searchStringData, setSearchString] = useState("");

  useEffect(() => {
    for (let i = 0; i < initialCities.length; i++) {
      axios
        .get(
          `https://www.metaweather.com/api/location/search/?query=${initialCities[i]}`
        )
        .then((res) => {
          setDefaultCityData((oldCityData) => [...oldCityData, res.data[0]]);
        });
    }
  }, []);

  return (
    <DefaultCitiesContext.Provider
      value={{
        defaultCities: [defaultCityData, setDefaultCityData],
        searchString: [searchStringData, setSearchString],
      }}
    >
      {props.children}
    </DefaultCitiesContext.Provider>
  );
};
