import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import CityDetail from "./CityDetail";

const CityTable = (props) => {
  const [cities] = useContext(WeatherContext);
  return cities.map((city) => (
    <div className="CityTable" key={city.woeid}>
      <CityDetail city={city} />
    </div>
  ));
};

export default CityTable;
