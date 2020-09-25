import React, { useState, createContext } from "react";

export const UnitContext = createContext();

export const UnitContextProvider = (props) => {
  const [tempUnit, setTempUnit] = useState("°C");
  const [speedUnit, setSpeedUnit] = useState("kph");
  const [speedAd, setSpeedAd] = useState(1);
  const [tempAd, setTempAd] = useState(1);
  const [tempAd32, setTempAd32] = useState(0);

  return (
    <UnitContext.Provider
      value={{
        temp: [tempUnit, setTempUnit],
        speed: [speedUnit, setSpeedUnit],
        speedAdjust: [speedAd, setSpeedAd],
        tempAdjust: [tempAd, setTempAd],
        tempAdjust32: [tempAd32, setTempAd32],
      }}
    >
      {props.children}
    </UnitContext.Provider>
  );
};
