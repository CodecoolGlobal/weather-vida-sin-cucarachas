import React from "react";

export default function DayPeriod() {
  let date = new Date();
  let hours = date.getHours();

  let imagePath = "";
  if (hours < 19 && hours > 7) {
    imagePath = "https://www.metaweather.com/static/img/weather/c.svg";
  } else {
    imagePath =
      "https://dejpknyizje2n.cloudfront.net/marketplace/products/crescent-moon-icon-sticker-1544043862.2615688.png";
  }
  return (
    <img
      style={{ marginBottom: "1.5%", marginLeft: "5.5%" }}
      src={imagePath}
      alt=""
      heigth="auto"
      width="18rem"
    />
  );
}
