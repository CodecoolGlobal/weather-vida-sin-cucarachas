import React, { useState, createContext } from "react";

export const WeatherHistoryContext = createContext();

export const WeatherHistoryProvider = (props) => {
  const [WeatherHistory, setWeatherHistory] = useState([]);

  return (
    <WeatherHistoryContext.Provider value={[WeatherHistory, setWeatherHistory]}>
      {props.children}
    </WeatherHistoryContext.Provider>
  );
};
