import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UnitContext } from "../context/UnitContext";
import PictureCity from "./PictureCity";
import CompassPen from "./CompassPen";

export default function DisplayCity(props) {
  const [weather, setWeather] = useState([]);
  //const [sunrise, setSunrise] = useState();
  //const [sunset, setSunset] = useState();

  useEffect(() => {
    const url = `https://www.metaweather.com/api/location/${props.city.woeid}`;
    axios.get(url).then((res) => setWeather(res.data.consolidated_weather));
  }, []);
  const { temp, speed, speedAdjust, tempAdjust, tempAdjust32 } = useContext(
    UnitContext
  );
  const [tempUnit] = temp;
  const [speedUnit] = speed;
  const [speedAd] = speedAdjust;
  const [tempAd] = tempAdjust;
  const [tempAd32] = tempAdjust32;

  if (weather.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <PictureCity title={props.city.title} />
        <h2>{props.city.title}</h2>
        <h3>{`Current Temperature: ${Math.ceil(
          weather[0].the_temp * tempAd + tempAd32
        )} ${tempUnit}`}</h3>
        <h3>{"Current Weather:" + weather[0].weather_state_name}</h3>
        <h3>{"Date: " + weather[0].applicable_date}</h3>
        <img
          src={`https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg`}
          alt={weather[0].weather_state_abbr}
          width="64"
          height="64"
        />
        <h3>{`Wind Speed: ${Math.ceil(
          weather[0].wind_speed * speedAd
        )} ${speedUnit}`}</h3>
        <h3>{"Wind Direction: " + weather[0].wind_direction}</h3>
        <CompassPen direction={weather[0].wind_direction} />
        <h3>
          {`Min temperature: ${Math.ceil(
            weather[0].min_temp * tempAd + tempAd32
          )} ${tempUnit}`}
        </h3>
        <h3>
          {`Max temperature:
            ${Math.ceil(weather[0].max_temp * tempAd + tempAd32)} ${tempUnit}`}
        </h3>

        <Link
          to={{
            pathname: `/weekly-forecast/${props.city.woeid}`,
            query: { cityWeather: weather, title: props.city.title },
          }}
        >
          <h3>Weekly Forecast</h3>
        </Link>
      </div>
    );
  }
}
