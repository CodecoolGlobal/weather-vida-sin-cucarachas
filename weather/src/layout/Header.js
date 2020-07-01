import React from "react";
import Search from "../component/Search";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.77rem;
  overflow: hidden;
  background-color: #a9a9a9;
`;

const LiL = styled.li`
  float: left;
  display: block;
`;

const LiR = styled.li`
  float: right;
  display: block;
`;

const A = styled.a`
  /* display: block; */
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #8b0000;
  }
`;

export default function Header() {
  return (
    <div>
      <Ul>
        <LiL>
          <A href="/">Home</A>
        </LiL>
        <LiL>
          <A href="/history">Search in History</A>
        </LiL>
        <LiL>
          <button>button</button>
        </LiL>
        <LiR>
          <Search />
        </LiR>
      </Ul>
      <br></br>
    </div>
  );
}
