import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UnitContext } from "../context/UnitContext";
// import PictureCity from "./PictureCity";
import CompassPen from "./CompassPen";
import "../style/tableCard.css";

export default function DisplayCity(props) {
  const [weather, setWeather] = useState([]);
  const [cityIMG, setCityIMG] = useState(
    "https://pixabay.com/get/55e1d6434c51a414f6da8c7dda7936791736dee556556c48702678d29049cd58be_1280.jpg"
  );
  //const [sunrise, setSunrise] = useState();
  //const [sunset, setSunset] = useState();

  useEffect(() => {
    const url = `https://www.metaweather.com/api/location/${props.city.woeid}`;
    axios.get(url).then((res) => setWeather(res.data.consolidated_weather));
    getCityPicture();
  }, []);

  const getCityPicture = () => {
    console.log("getCityPicture is running");
    axios
      .get(
        `https://pixabay.com/api/?key=17290054-c3d0d031b97aa86cf5b1016d5&q=${props.city.title}+town`
      )
      .then((res) => {
        if (res.data.hits.length > 0) {
          setCityIMG(res.data.hits[0].largeImageURL);
        } else {
          setCityIMG(
            "https://pixabay.com/get/55e1d6434c51a414f6da8c7dda7936791736dee556556c48702678d29049cd58be_1280.jpg"
          );
        }
      });
  };

  const { temp, speed, speedAdjust, tempAdjust, tempAdjust32 } = useContext(
    UnitContext
  );
  const [tempUnit] = temp;
  const [speedUnit] = speed;
  const [speedAd] = speedAdjust;
  const [tempAd] = tempAdjust;
  const [tempAd32] = tempAdjust32;

  //

  if (weather.length === 0) {
    return (
      <img src="/loading.gif" alt="loading cat" width="90%" height="50%" />
    );
  } else {
    console.log(cityIMG);
    return (
      <div>
        <Link
          to={{
            pathname: `/weekly-forecast/${props.city.woeid}`,
            query: {
              cityWeather: weather,
              title: props.city.title,
              img: cityIMG,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="weather-card one">
            <div
              className="top"
              style={{
                background: `url("${cityIMG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "450",
                height: "740",
              }}
            >
              <div className="wrapper">
                <h1 className="heading">{props.city.title}</h1>

                <p className="temp">
                  <span className="temp-value">
                    {Math.ceil(weather[0].the_temp * tempAd + tempAd32)}
                  </span>
                  <span className="deg">{tempUnit}</span>
                </p>
                <h3 className="location">{weather[0].weather_state_name}</h3>
                <img
                  src={`https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg`}
                  alt={weather[0].weather_state_abbr}
                  width="64"
                  height="64"
                />
              </div>
            </div>
            <div className="bottom">
              <div className="wrapper">
                <ul className="forecast">
                  <li className="active">
                    <span className="date">Max temperature:</span>
                    <span className="lnr condition">
                      <span className="temp">
                        {Math.ceil(weather[0].max_temp * tempAd + tempAd32)}
                        {tempUnit}
                      </span>
                    </span>
                  </li>
                  <li className="active">
                    <span className="date">Min temperature: </span>
                    <span className="lnr condition">
                      <span className="temp">
                        {Math.ceil(weather[0].min_temp * tempAd + tempAd32)}
                        <span className="deg"></span>
                        <span className="temp-type">{tempUnit}</span>
                      </span>
                    </span>
                  </li>
                  <li className="active">
                    <span className="date">Wind speed: </span>
                    <span className="lnr condition">
                      <span className="temp">
                        {Math.ceil(weather[0].wind_speed * speedAd)}
                        <span className="deg"></span>
                        <span className="temp-type">{speedUnit}</span>
                      </span>
                    </span>
                  </li>
                  <li className="active">
                    <span className="date">Wind direction: </span>
                    <span className="lnr condition">
                      <span className="temp" style={{ right: "120%" }}>
                        <CompassPen direction={weather[0].wind_direction} />
                        <span className="deg"></span>
                        <span className="temp-type"></span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
