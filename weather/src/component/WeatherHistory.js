import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { WeatherHistoryContext } from "../context/WeatherHistoryContext";
import DisplayCityHistory from "./DisplayCityHistory";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const WeatherHistory = () => {
  let year = "year";
  let month = "month";
  let day = "day";

  const [cityName, setCityName] = useState("");
  // const [year, setYear] = useState("year");
  // const [month, setMonth] = useState("month");
  // const [day, setDay] = useState("day");

  let actualYear = new Date().getFullYear();
  let cityData = [];

  const [weatherHistory, setWeatherHistory] = useContext(WeatherHistoryContext);

  const changeCityNameData = (e) => {
    setCityName(e.target.value);
  };

  // const changeYearData = (e) => {
  //   setYear(e.target.value);
  // };

  // const changeMonthData = (e) => {
  //   setMonth(e.target.value);
  // };

  // const changeDayData = (e) => {
  //   setDay(e.target.value);
  // };

  const submitSearchData = (e) => {
    e.preventDefault();
    changeDate();
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
        cityHistory.title = city.title;
        cityHistory.woeid = city.id;
        setWeatherHistory((prevData) => [...prevData, cityHistory]);
      });
    }
  }
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  function changeDate() {
    const date = localDate.split("-");
    year = date[0];
    month = date[1];
    day = date[2];
  }
  const classes = useStyles();

  const [localDate, setLocalDate] = useState("2013-01-01");

  return (
    <div>
      <form
        onSubmit={submitSearchData}
        className={classes.container}
        style={{ marginBottom: "2%" }}
      >
        <input
          type="text"
          onChange={changeCityNameData}
          placeholder="City name"
        />
        <TextField
          id="date"
          label="Date pick"
          type="date"
          // defaultValue="2017-05-24"
          className={classes.textField}
          value={localDate}
          onChange={(e) => setLocalDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <input
          type="number"
          onChange={changeYearData}
          min="2013"
          max={actualYear}
          placeholder="2013"
        />
        <input
          type="number"
          onChange={changeMonthData}
          min={1}
          max={12}
          placeholder="1"
        />
        <input
          type="number"
          onChange={changeDayData}
          min={1}
          max={31}
          placeholder="1"
        /> */}
        <input type="submit" value="Search" />
      </form>
      <DisplayCityHistory />
    </div>
  );
};

export default WeatherHistory;
