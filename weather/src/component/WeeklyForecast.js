import React from "react";

const WeeklyForecast = (props) => {
  const weather = props.location.query.cityWeather;
  const title = props.location.query.title;

  return (
    <div>
      <h2>{title}</h2>
      {weather.map((day, index) => (
        <div key={index + title}>
          <h3>{"Current Weather:" + day.weather_state_name}</h3>
          <h3>{"Date: " + day.applicable_date}</h3>
          <h3>{"Wind Speed: " + day.wind_speed}</h3>
          <h3>{"Min temperature: " + day.min_temp}</h3>
          <h3>{"Max temperature: " + day.max_temp}</h3>
          <div>=============================</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;