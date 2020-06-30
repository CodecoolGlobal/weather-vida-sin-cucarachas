import React, { useContext } from "react";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import CityDetail from "./CityDetail";
//import { SearchCitiesContext } from "../context/SearchCitiesContext";

const CityTable = (props) => {
  const { defaultCities, searchString } = useContext(DefaultCitiesContext);
  const [defaultCityData, setDefaultCityData] = defaultCities;

  return defaultCityData.map((city) => (
    <div className="CityTable" key={city.woeid}>
      <CityDetail city={city} />
    </div>
  ));
};

export default CityTable;
