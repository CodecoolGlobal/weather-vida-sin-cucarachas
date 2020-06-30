import React from "react";

const CityDetailWeek = (props) => {
  const weather = props.weather;

  return weather.map((day) => (
    <div>
      <h3>{"Current Weather:" + day.weather_state_name}</h3>
      <h3>{"Date: " + day.applicable_date}</h3>
      <h3>{"Wind Speed: " + day.wind_speed}</h3>
      <h3>{"Max temperature: " + day.min_temp}</h3>
      <h3>{"Min temperature: " + day.max_temp}</h3>
    </div>
  ));
};

export default CityDetailWeek;
