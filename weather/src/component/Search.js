import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Search() {
  const [searchedString, setSearchedString] = useContext(SearchContext);
  let localSearchedString = "";

  const submitValue = () => {
    setSearchedString(localSearchedString);
  };

  const SearchContainer = styled.div`
    float: right;
    margin-top: 0.7%;
  `;

  const Input = styled.input`
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  `;

  const Button = styled.button`
    float: right;
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #ccc;
    }
  `;

  return (
    <SearchContainer>
      <Input
        type="text"
        onChange={(e) => (localSearchedString = e.target.value)}
      />
      <Button>
        <Link
          to={"/search"}
          onClick={submitValue}
          style={{ textDecoration: "none", color: "black" }}
        >
          search
        </Link>
      </Button>
    </SearchContainer>
  );
}
