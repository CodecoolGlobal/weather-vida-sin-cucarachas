import React, { useContext, useState } from "react";
import { UnitContext } from "../context/UnitContext";

const WeeklyForecast = (props) => {
  const weather = props.location.query.cityWeather;
  const title = props.location.query.title;

  const { temp, speed, speedAdjust, tempAdjust, tempAdjust32 } = useContext(
    UnitContext
  );
  const [tempUnit] = temp;
  const [speedUnit] = speed;
  const [speedAd] = speedAdjust;
  const [tempAd] = tempAdjust;
  const [tempAd32] = tempAdjust32;

  return (
    <div>
      <h2>{title}</h2>
      {weather.map((day, index) => (
        <div key={index + title}>
          <h3>{`Current Temperature: ${Math.ceil(
            day.the_temp * tempAd + tempAd32
          )} ${tempUnit}`}</h3>
          <h3>{"Current Weather:" + day.weather_state_name}</h3>
          <h3>{"Date: " + day.applicable_date}</h3>
          <img
            src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
            alt={day.weather_state_abbr}
            width="64"
            height="64"
          />
          <h3>{`Wind Speed: ${Math.ceil(
            day.wind_speed * speedAd
          )}${speedUnit}`}</h3>
          <h3>{"Wind Direction: " + day.wind_direction}</h3>
          <h3>{`Min temperature: ${Math.ceil(
            day.min_temp * tempAd + tempAd32
          )}${tempUnit}`}</h3>
          <h3>{`Max temperature: ${Math.ceil(
            day.max_temp * tempAd + tempAd32
          )}${tempUnit}`}</h3>
          <div>=============================</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
