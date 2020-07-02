import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";
import DisplayCityHistory from "./DisplayCityHistory";

const WeatherHistory = () => {
  const [cityName, setCityName] = useState("");
  const [year, setYear] = useState("year");
  const [month, setMonth] = useState("month");
  const [day, setDay] = useState("day");

  let actualYear = new Date().getFullYear();
  let cityData = [];

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
    searchCity(searchWeatherHistory);
  };

  function searchCity(callback) {
    const url = `https://www.metaweather.com/api/location/search/?query=${cityName}`;
    axios.get(url).then((res) => {
      cityData = [];
      for (let dataList of res.data) {
        cityData.push({ id: dataList.woeid, title: dataList.title });
      }
      callback();
    });
  }

  function searchWeatherHistory() {
    setWeatherHistory([]);
    for (let city of cityData) {
      const url = `https://www.metaweather.com//api/location/${city.id}/${year}/${month}/${day}`;
      axios.get(url).then((res) => {
        let cityHistory = res.data;
        console.log("cityhistory a weathercityben: " + cityHistory);
        cityHistory.title = city.title;
        cityHistory.woeid = city.id;
        setWeatherHistory((prevData) => [...prevData, cityHistory]);
      });
    }
  }

  return (
    <div>
      <form onSubmit={submitSearchData}>
        <input type="text" onChange={changeCityNameData} />
        <input
          type="number"
          onChange={changeYearData}
          min="2013"
          max={actualYear}
        />
        <input type="number" onChange={changeMonthData} min={1} max={12} />
        <input type="number" onChange={changeDayData} min={1} max={31} />
        <input type="submit" />
      </form>
      <h2>
        {year}/{month}/{day}
      </h2>
      <DisplayCityHistory />
    </div>
  );
};

export default WeatherHistory;
