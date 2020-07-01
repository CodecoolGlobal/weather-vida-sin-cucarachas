import React from "react";
import CatDisplay from "./CatDisplay";
import CatFact from "./CatFact";

const Header = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <CatDisplay />
      <CatFact />
    </div>
  );
};
export default Header;
