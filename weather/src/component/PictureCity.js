import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PictureCity(props) {
  const [imgURL, setIMGURL] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=17290054-c3d0d031b97aa86cf5b1016d5&q=${props.title}+center`
      )
      .then((res) => setIMGURL(res.data.hits[0].largeImageURL));
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
