import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
const CityTable = (props) => {
  const [cities] = useContext(WeatherContext);
  return cities.map((city) => (
    <div className="CityTable" key={city.woeid}>
      <h3>{"Title: " + city.title}</h3>
      <h3>{city.woeid}</h3>
      <h3>{city.location_type}</h3>
      <h3>{city.latt_long}</h3>
    </div>
  ));
};

export default CityTable;
