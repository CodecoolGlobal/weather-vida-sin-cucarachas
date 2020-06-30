import React, { useContext, useState } from "react";
import axios from "axios";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";

const WeatherHistory = () => {
  const [cityName, setCityName] = useState("");
  const [woeid, setWoeid] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [weatherHistory, setWeatherHistory] = useContext(WeatherHistoryContext);

  const changeCityNameData = (e) => {
    setCityName(e.target.value);
  };

  const changeYearData = (e) => {
    setYear(e.target.value);
  };

  const changeMonthData = (e) => {
    setMonth(e.target.value);
  };

  const changeDayData = (e) => {
    setDay(e.target.value);
  };

  const submitSearchData = (e) => {
    e.preventDefault();
    searchCityWoeid();
    searchWeatherHistory();
  };

  function searchCityWoeid() {
    const url = `https://www.metaweather.com/api/location/search/?query=${cityName}`;
    axios.get(url).then((res) => {
      if (res.data.length === 1) {
        setWoeid(res.data.woeid);
      } else {
        console.log("There is a problem at getting the Woeid!");
      }
    });
  }

  function searchWeatherHistory() {
    const url = `https://www.metaweather.com//api/location/${woeid}/${year}/${month}/${day}`;
    axios.get(url).then((res) => {
      setWeatherHistory(res.data);
      if (weatherHistory.length === 0) {
        console.log("There is a problem at getting data!");
      } else {
        console.log(weatherHistory);
      }
    });
  }

  return (
    <div>
      <form onSubmit={submitSearchData}>
        <input type="text" onChange={changeCityNameData} />
        <input
          type="number"
          onChange={changeYearData}
          min={2013}
          max={new Date().getFullYear}
        />
        <input type="number" onChange={changeMonthData} min={1} max={12} />
        <input type="number" onChange={changeDayData} min={1} max={31} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default WeatherHistory;
