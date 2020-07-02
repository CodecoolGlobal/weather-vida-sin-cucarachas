import React, { useContext } from "react";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";
import SingleCityHistory from "../component/SingleCityHistory";

const DisplayCityHistory = () => {
  const [weatherHistory, setWeatherHistory] = useContext(WeatherHistoryContext);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(450px, max-content))",
        justifyContent: "center",
        gridGap: "3rem",
      }}
    >
      {weatherHistory.map((city) => {
        return <SingleCityHistory key={city.woeid} city={city} />;
      })}
    </div>
  );
};

export default DisplayCityHistory;
