import React, { useContext } from "react";
import { CatFactContext } from "../context/CatFactContext";
import "../cat.scss";
import axios from "axios";

const CatDisplay = () => {
  const [catFact, setCatFact] = useContext(CatFactContext);

  const getCatFact = () => {
    axios
      .get("https://catfact.ninja/fact?max_length=125")
      .then((res) => setCatFact(res.data.fact));
    console.log(catFact);
  };

  return (
    <div
      className="cat"
      onClick={getCatFact}
      style={{ display: "block", float: "left" }}
    >
      <div className="ear ear--left"></div>
      <div className="ear ear--right"></div>
      <div className="face"></div>
      <div className="eye eye--left">
        <div className="eye-pupil"></div>
      </div>
      <div className="eye eye--right">
        <div className="eye-pupil"></div>
      </div>
      <div className="muzzle"></div>
    </div>
  );
};

export default CatDisplay;
