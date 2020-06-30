import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CityDetail = (props) => {
  const [weather, setWeather] = useState([]);
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${props.city.woeid}`;
    axios.get(url).then((res) => setWeather(res.data.consolidated_weather));
    axios.get(url).then((res) => setSunrise(res.data.sun_rise));
    axios.get(url).then((res) => setSunset(res.data.sun_set));
  }, []);

  if (weather.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h3>{"Current Weather:" + weather[0].weather_state_name}</h3>
        <h3>{"Date: " + weather[0].applicable_date}</h3>
        <h3>{"Wind Speed: " + weather[0].wind_speed}</h3>
        <h3>{"Max temperature: " + weather[0].min_temp}</h3>
        <h3>{"Min temperature: " + weather[0].max_temp}</h3>

        <Link
          to={{
            pathname: `/weather/${props.city.woeid}`,
            query: { cityWeather: weather },
          }}
        >
          <h3>Weekly Forecast</h3>
        </Link>
      </div>
    );
  }
};

export default CityDetail;
