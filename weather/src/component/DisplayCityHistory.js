import React, { useContext } from "react";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";
import SingleCityHistory from "../component/SingleCityHistory";

const DisplayCityHistory = () => {
  const [weatherHistory, setWeatherHistory] = useContext(WeatherHistoryContext);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(100px, 500px) 1fr 1fr",
        gridTemplateRows: "850px 850px 850px",
        gridGap: "10px",
      }}
    >
      {weatherHistory.map((city) => {
        return <SingleCityHistory key={city.woeid} city={city} />;
      })}
    </div>
  );
};

export default DisplayCityHistory;
