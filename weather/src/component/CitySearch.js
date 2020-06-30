import React, { useState, useContext, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { SearchCitiesContext } from "../context/SearchCitiesContext";
import axios from "axios";

const CitySearch = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [cities, setCities] = useContext(SearchCitiesContext);

  const changeSearchData = (e) => {
    // setSearchCity(e.target.value);
  };

  const submitSearchData = (e) => {
    // e.preventDefault();
    // locationSearch();
    // window.location.replace("/search");
  };

  function locationSearch() {
    const url = `https://www.metaweather.com/api/location/search/?query=${searchCity}`;
    axios.get(url).then((res) => {
      setCities(res.data);
    });
  }

  return (
    <div>
      <form onSubmit={submitSearchData}>
        <input type="text" value={searchCity} onChange={changeSearchData} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CitySearch;
