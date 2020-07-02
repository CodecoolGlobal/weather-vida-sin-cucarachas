import React, { useContext } from "react";
import { NavBarThemeContext } from "../theme/NavBarThemeContext";
import NavBarThemes from "../theme/NavBarThemes";
import styled from "styled-components";

const ActualTime = () => {
  const [themeMode, setThemeMode] = useContext(NavBarThemeContext);
  const currentTheme = NavBarThemes[themeMode];
  let date = new Date();

  let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  let day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();

  let dateString = "" + date.getFullYear() + "/" + month + "/" + day;
  let hours = date.getHours();

  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let hourString = hours + ":" + minutes;

  let imagePath = "";
  if (hours < 19 && hours > 7) {
    setThemeMode("day");
    imagePath = "https://www.metaweather.com/static/img/weather/c.svg";
  } else {
    imagePath =
      "https://dejpknyizje2n.cloudfront.net/marketplace/products/crescent-moon-icon-sticker-1544043862.2615688.png";
    setThemeMode("night");
  }

  const Paragr = styled.p`
    text-align: center;
    display: inline-block;
    float: left;
  `;

  const Img = styled.img`
    float: right;
    margin-left: 0.5rem;
  `;
  const Div = styled.div`
    display: inline-block;
    width: 10rem;
  `;

  return (
    <Div>
      <Paragr>
        {dateString + " " + hourString}
        <Img src={imagePath} alt="" width="18rem" heigth="auto"></Img>
      </Paragr>
    </Div>
  );
};

export default ActualTime;
