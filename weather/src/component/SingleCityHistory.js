import React, { useContext } from "react";
import { UnitContext } from "../context/UnitContext";

const SingleCityHistory = (props) => {
  const { temp, speed, speedAdjust, tempAdjust, tempAdjust32 } = useContext(
    UnitContext
  );
  const [tempUnit] = temp;
  const [speedUnit] = speed;
  const [speedAd] = speedAdjust;
  const [tempAd] = tempAdjust;
  const [tempAd32] = tempAdjust32;

  if (props.city.length === 0) {
    return (
      <div>
        <h3>{props.city.title}</h3>
        <p>Missing information :(</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.city.title}</h3>
        <p>Weather: {props.city[0].weather_state_name}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/${props.city[0].weather_state_abbr}.svg`}
          alt={props.city[0].weather_state_abbr}
          width="64"
          height="64"
        />
        <p>
          Wind Speed: {Math.ceil(props.city[0].wind_speed * speedAd)}{" "}
          {speedUnit}
        </p>
        <p>Wind Direction: {props.city[0].wind_direction}</p>
        <p>
          Temp.: {Math.ceil(props.city[0].the_temp * tempAd + tempAd32)}
          {tempUnit}
        </p>
        <p>
          Max temperature:{" "}
          {Math.ceil(props.city[0].max_temp * tempAd + tempAd32)} {tempUnit}
        </p>
        <p>
          Min temperature:{" "}
          {Math.ceil(props.city[0].min_temp * tempAd + tempAd32)} {tempUnit}
        </p>
        <p>Humidity: {props.city[0].humidity}%</p>
      </div>
    );
  }
};

export default SingleCityHistory;
