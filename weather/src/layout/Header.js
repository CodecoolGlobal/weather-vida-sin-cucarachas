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

  const Ul = styled.ul`
    background-color: ${currentTheme.backgroundColor};
    color: ${currentTheme.textColor};
    list-style-type: none;
    margin: 0;
    padding: 0.77rem;
    overflow: hidden;
  `;

  const LiL = styled.li`
    float: left;
    display: block;
  `;

  const LiR = styled.li`
    float: right;
    display: block;
  `;

  const A = styled.a`
    /* display: block; */
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: ${currentTheme.textColor};
    &:hover {
      background-color: #8b0000;
    }
  `;

  const Paragraph = styled.p`
    text-align: center;
  `;

  return (
    <div>
      <Ul>
        <LiL>
          <A href="/">Home</A>
        </LiL>
        <LiL>
          <A href="/history">Search in History</A>
        </LiL>
        <LiR>
          <Search />
        </LiR>
        <LiL>
          <Button onClick={switchUnit} color="primary">
            unit
          </Button>
        </LiL>
        <LiL>
          <Paragraph>
            {tempUnit} {speedUnit}
          </Paragraph>
        </LiL>
        <LiR>
          <ActualTime />
        </LiR>
      </Ul>
      <br></br>
    </div>
  );
}
