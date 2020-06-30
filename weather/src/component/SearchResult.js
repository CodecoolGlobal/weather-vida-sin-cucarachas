import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchResult() {
  const [searchedString] = useContext(SearchContext);

  return <div>{searchedString}</div>;
}
