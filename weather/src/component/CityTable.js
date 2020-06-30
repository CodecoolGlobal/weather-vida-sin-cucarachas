import React from "react";
//import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import CityDetail from "./CityDetail";
//import { SearchCitiesContext } from "../context/SearchCitiesContext";

const CityTable = (props) => {
  return props.cities.map((city) => (
    <div className="CityTable" key={city.woeid}>
      <CityDetail city={city} />
    </div>
  ));
};

export default CityTable;
