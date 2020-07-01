import React from "react";

const SingleCityHistory = (props) => {
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
        <p>Temp.: {props.city[0].the_temp}</p>
        <p>Max temperature: {props.city[0].max_temp}</p>
        <p>Min temperature: {props.city[0].min_temp}</p>
        <p>Humidity: {props.city[0].humidity}%</p>
      </div>
    );
  }
};

export default SingleCityHistory;
