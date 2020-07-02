import React, { useContext } from "react";
import Search from "../component/Search";
import { UnitContext } from "../context/UnitContext";
//import { Button } from "@material-ui/core";
import styled from "styled-components";
import { NavBarThemeContext } from "../theme/NavBarThemeContext";
import NavBarThemes from "../theme/NavBarThemes";
import ActualTime from "../component/ActualTime";
import DayPeriod from "../component/DayPeriod";
import { Link } from "react-router-dom";

export default function Header() {
  const [themeMode, setThemeMode] = useContext(NavBarThemeContext);
  const currentTheme = NavBarThemes[themeMode];

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

  let displayTempUnit = tempUnit === "°C" ? "°F" : "°C";
  let displaySpeedUnit = speedUnit === "kph" ? "mph" : "kph";

  const TopNav = styled.div`
    overflow: hidden;
    background-color: ${currentTheme.backgroundColor};
    position: fixed;
    top: 0;
    margin-left: -0, 55%;
    width: 100.05%;
    z-index: 2;
  `;

  const Links = {
    color: `${currentTheme.color}`,
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
    marginTop: "0.55%",
    ":hover": {
      backgroundColor: "#ddd",
      color: "black",
    },
    ":active": {
      backgroundColor: "#2196f3",
      color: `${currentTheme.color}`,
    },
  };

  const Button = {
    float: "left",
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "0px 0px",
    marginTop: "1.5%",
    marginRight: "1%",
    textDecoration: "none",
    fontSize: "14px",
    width: "5%",
  };

  return (
    <TopNav>
      <Link style={Links} to="/">
        Home
      </Link>
      <Link style={Links} to="/history">
        Search in History
      </Link>
      <ActualTime />
      <DayPeriod />
      <button onClick={switchUnit} style={Button}>
        {displayTempUnit} {displaySpeedUnit}
      </button>
      <Search />
    </TopNav>
  );
}
