import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import DisplayCity from "./DisplayCity";
import axios from "axios";

export default function SearchResult() {
  const [searchedString] = useContext(SearchContext);
  const [resultCities, setResultCities] = useState([]);

  useEffect(() => {
    const url = `https://www.metaweather.com/api/location/search/?query=${searchedString}`;
    axios.get(url).then((res) => setResultCities(res.data));
  }, [searchedString]);

  console.log(resultCities);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(450px, max-content))",
        justifyContent: "center",
        gridGap: "2rem",
        marginTop: "5%",
      }}
    >
      {resultCities.map((city) => (
        <DisplayCity key={city.woeid} city={city} />
      ))}
    </div>
  );
}
