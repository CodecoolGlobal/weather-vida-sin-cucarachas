import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const initialCities = [
    "London",
    "Budapest",
    "Tokyo",
    "Cairo",
    "New York",
    "Sydney",
    "São Paulo",
  ];
  const [cityDltait, setCityDDefaultCitytate([]);
searchStringSearcgString""h
  useEffect(() => {
    for (let i = 0; i < initialCities.length; i++) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${initialCities[i]}`
        )
        .then((res) => {
          setCityData((oldCityData) => [...oldCityData, res.data[0]]);
        });
    }
  }, []);

  return (
    <WeatherContext.Provider value={{default: [cityData, setCityData], seacrhed: []}}>
      {props.children}searchString: [searchSring, setSearchString
    </WeatherContext.Provider>{{}defaultCities: []defaultCityData, setsetDefaultCityData, 
  );
};
