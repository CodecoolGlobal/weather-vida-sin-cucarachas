import React, { useState, useContext, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";

const CitySearch = (props) => {
  const { defaultCities, searchString } = useContext(DefaultCitiesContext);
  const [searchStringData, setSearchString] = searchString;
  const [searchCity, setSearchCity] = useState("");

  const changeSearchData = (e) => {
    setSearchCity(e.target.value);
    console.log(searchCity);
  };

  const submitSearchData = (e) => {
    console.log("submit fired");
    e.preventDefault();
    console.log("searchCity (CitySearch state): " + searchCity);
    //setSearchString(searchCity);
    //console.log("context searchstring: " + searchStringData);
    //console.log("cityData: " + props.searchString);

    //locationSearch();

    //window.location.replace("/search");
    //<Redirect to="/search" />
  };

  return (
    <div>
      <input type="text" value={searchCity} onChange={changeSearchData} />
      <Link to={{ path: "/search", query: { searchString: searchCity } }}>
        {/* <button type="button" value="submit">
          Search
        </button> */}
        Search
      </Link>
    </div>
  );
};

export default CitySearch;
