import React, { useContext } from "react";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import DisplayCity from "./DisplayCity";

export default function AllDefaultCities() {
  const [defaultCityData] = useContext(DefaultCitiesContext);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(100px, 500px) 1fr 1fr",
        gridTemplateRows: "850px 850px 850px",
        gridGap: "10px",
      }}
    >
      {defaultCityData.map((city) => (
        <DisplayCity key={city.woeid} city={city} />
      ))}
    </div>
  );
}
