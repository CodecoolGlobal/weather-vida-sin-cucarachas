import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function Search() {
  const [searchedString, setSearchedString] = useContext(SearchContext);
  let localSearchedString = "";

  const submitValue = () => {
    setSearchedString(localSearchedString);
  };

  console.log("context searched string in Search.js: " + searchedString);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => (localSearchedString = e.target.value)}
      />
      <button>
        <Link
          to={"/search"}
          onClick={submitValue}
          style={{ textDecoration: "none" }}
        >
          search
        </Link>
      </button>
    </div>
  );
}
