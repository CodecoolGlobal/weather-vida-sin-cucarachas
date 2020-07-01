import React, { useContext } from "react";
import Search from "../component/Search";
import { UnitContext } from "../context/UnitContext";

export default function Header() {
  const { temp, speed, speedAdjust, tempAdjust, tempAdjust32 } = useContext(
    UnitContext
  );
  const [tempUnit, setTempUnit] = temp;
  const [speedUnit, setSpeedUnit] = speed;
  const [speedAd, setSpeedAd] = speedAdjust;
  const [tempAd, setTempAd] = tempAdjust;
  const [tempAd32, setTempAd32] = tempAdjust32;

  function switchUnit() {
    setTempUnit(tempUnit === "°C" ? "°F" : "°C");
    setSpeedUnit(speedUnit === "kph" ? "mph" : "kph");
    setSpeedAd(speedAd === 1 ? 0.62 : 1);
    setTempAd(tempAd === 1 ? 1.8 : 1);
    setTempAd32(tempAd32 === 0 ? 32 : 0);
  }

  return (
    <div>
      <Search />
      <button onClick={switchUnit}>unit</button>
      <div>{tempUnit}</div>
      <div>{speedUnit}</div>
    </div>
  );
}
