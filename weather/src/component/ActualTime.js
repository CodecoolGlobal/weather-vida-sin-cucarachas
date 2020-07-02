import React, { useContext } from "react";
import { NavBarThemeContext } from "../theme/NavBarThemeContext";
import NavBarThemes from "../theme/NavBarThemes";

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

  if (hours < 19 && hours > 7) {
    setThemeMode("day");
  } else {
    setThemeMode("night");
  }

  return (
    <div>
      {/* <img></img> */}
      <p>{dateString + " " + hourString}</p>
    </div>
  );
};

export default ActualTime;
