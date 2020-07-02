import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PictureCity(props) {
  const [imgURL, setIMGURL] = useState(
    "https://pixabay.com/get/55e1d6434c51a414f6da8c7dda7936791736dee556556c48702678d29049cd58be_1280.jpg"
  );

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=17290054-c3d0d031b97aa86cf5b1016d5&q=${props.title}+center`
      )
      .then((res) => {
        if (res.data.hits.length > 0) {
          setIMGURL(res.data.hits[0].largeImageURL);
        }
      });
  });

  console.log(imgURL);

  if (imgURL === "") {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        <img src={imgURL} alt={props.title} />
      </div>
    );
  }
}

//https://pixabay.com/api/?key=17290054-c3d0d031b97aa86cf5b1016d5&q=title+center
