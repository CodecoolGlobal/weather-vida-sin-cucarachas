import React, { useContext } from "react";
import Search from "../component/Search";
import { UnitContext } from "../context/UnitContext";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { NavBarThemeContext } from "../theme/NavBarThemeContext";
import NavBarThemes from "../theme/NavBarThemes";
import ActualTime from "../component/ActualTime";

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
  `;

  const Links = styled.a`
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: #ddd;
      color: black;
    }
    & active {
      background-color: #2196f3;
      color: white;
    }
  `;

  const Button = styled.p`
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 0px 16px;
    text-decoration: none;
    font-size: 17px;
  `;

  return (
    <TopNav>
      <Links href="/">Home</Links>
      <Links href="/history">Search in History</Links>
      <ActualTime />
      <Button>
        <button onClick={switchUnit}>
          {displayTempUnit} {displaySpeedUnit}
        </button>
      </Button>
      <Search />
    </TopNav>
  );
}
