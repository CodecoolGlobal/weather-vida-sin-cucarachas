import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CityDetail from "./CityDetail";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";

const CityTableSearch = (props) => {
  //const { defaultCities, searchString } = useContext(DefaultCitiesContext);
  //const [searchStringData, setSearchString] = searchString;
  const [searchedCities, setSearchedCities] = useState([]);

  useEffect(() => {
    console.log("searchstring from url: " + props.searchStringFromURL);
    const url = `https://www.metaweather.com/api/location/search/?query=${props.searchStringFromURL}`;
    axios.get(url).then((res) => setSearchedCities(res.data));
    console.log("searched cities: " + searchedCities);
  }, []);

  return searchedCities.map((city) => (
    <div className="CityTableSearch" key={city.woeid}>
      <CityDetail city={city} />
    </div>
  ));
};

export default CityTableSearch;
