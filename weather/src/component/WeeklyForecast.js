import React, { useContext } from "react";
import { UnitContext } from "../context/UnitContext";
import "../style/weekCard.scss";
import CompassPen from "./CompassPen";

const WeeklyForecast = (props) => {
  const weather = props.location.query.cityWeather;
  const title = props.location.query.title;
  const imgURL = props.location.query.img;

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
      <div
        class="container_w"
        style={{ backgroundImage: `url("${imgURL}")`, marginTop: "4%" }}
      >
        <div className="card_w" style={{ marginTop: "5%" }}>
          <div className="today_w">
            <div className="conditions_w">
              <div className="temp_w">
                <p>{Math.ceil(weather[0].the_temp * tempAd + tempAd32)} </p>
                {tempUnit}
              </div>
              <div className="currentCond_w">
                <p>
                  <span className="tags_w">Wind:</span>{" "}
                  {Math.ceil(weather[0].wind_speed * speedAd)} {speedUnit}
                </p>
                <p>
                  <span className="tags_w" style={{ marginLeft: "130%" }}>
                    Direction:
                  </span>{" "}
                </p>
                <p style={{ verticalAlign: "middle" }}>
                  <img
                    className="compass-pointer"
                    width="100%"
                    height="100%"
                    src="/compasspointer-100.png"
                    alt="compass"
                    style={{
                      transform: `rotate(${
                        Math.ceil(weather[0].wind_direction) + 45
                      }deg)`,
                      borderRadius: "100%",
                      border: "1px solid white",
                      marginBottom: "-20%",
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="location_w">
              <h3>{title}</h3>
              <img
                src={`https://www.metaweather.com/static/img/weather/${weather[0].weather_state_abbr}.svg`}
                alt={weather[0].weather_state_abbr}
                width="64"
                height="64"
                className="icon-location_w"
              />
            </div>
          </div>
          <div className="forcast_w">
            {weather.map((day, index) => (
              <div className="day_w">
                <div className="dayOfWeek_w">{day.applicable_date}</div>
                <div className="forcastTemp_w">
                  {Math.ceil(day.the_temp * tempAd + tempAd32)} {tempUnit}
                </div>
                <img
                  src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
                  alt={day.weather_state_abbr}
                  width="64"
                  height="64"
                  className="icon-location_w icon-forcast_w"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeeklyForecast;
