import React, { useContext } from "react";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";
import SingleCityHistory from "../component/SingleCityHistory";

const DisplayCityHistory = () => {
  const [weatherHistory, setWeatherHistory] = useContext(WeatherHistoryContext);
  return (
    <div>
      {weatherHistory.map((city) => {
        return <SingleCityHistory city={city} />;
      })}
    </div>
  );
};

export default DisplayCityHistory;
