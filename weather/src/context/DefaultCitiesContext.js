import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DefaultCitiesContext = createContext();

export const DefaultCitiesContextProvider = (props) => {
  const initialCities = [
    "London",
    "Budapest",
    "Tokyo",
    "Cairo",
    "New York",
    "Sydney",
    "São Paulo",
  ];
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < initialCities.length; i++) {
      axios
        .get(
          `https://www.metaweather.com/api/location/search/?query=${initialCities[i]}`
        )
        .then((res) => {
          setCityData((oldCityData) => [...oldCityData, res.data[0]]);
        });
    }
  }, []);

  return (
    <DefaultCitiesContext.Provider value={[cityData, setCityData]}>
      {props.children}
    </DefaultCitiesContext.Provider>
  );
};