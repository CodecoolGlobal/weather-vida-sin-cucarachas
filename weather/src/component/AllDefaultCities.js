import React, { useContext } from "react";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import DisplayCity from "./DisplayCity";

export default function AllDefaultCities() {
  const [defaultCityData] = useContext(DefaultCitiesContext);

  return defaultCityData.map((city) => <DisplayCity city={city} />);
}
