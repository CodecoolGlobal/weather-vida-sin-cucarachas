import React, { useContext } from "react";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import DisplayCity from "./DisplayCity";

export default function AllDefaultCities() {
  const [defaultCityData] = useContext(DefaultCitiesContext);

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
      {defaultCityData.map((city) => (
        <DisplayCity key={city.woeid} city={city} />
      ))}
    </div>
  );
}
