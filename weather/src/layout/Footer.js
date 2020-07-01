import React from "react";
import CatDisplay from "../component/CatDisplay";
import CatFact from "../component/CatFact";

const Footer = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <CatDisplay />
      <CatFact />
    </div>
  );
};
export default Footer;
