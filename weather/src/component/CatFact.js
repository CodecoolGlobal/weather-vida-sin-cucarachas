import React, { useContext } from "react";
import { CatFactContext } from "../context/CatFactContext";
import styled from "styled-components";

const CatFact = () => {
  const [catFact, setCatFact] = useContext(CatFactContext);

  const CatParagraph = styled.p`
    position: relative;
    max-width: 50%;
    left: 5%;
    background-color: #fff;
    padding: 1.125em 1.5em;
    font-size: 1.25em;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
      0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      position: absolute;
      width: 0;
      bottom: 35%;
      left: 100%;
      left: -0.75em;
      transform: rotate(270deg);
      border: 0.75rem solid transparent;
      border-top: none;

      border-bottom-color: #fff;
      filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.2));
    }
  `;
  return (
    <div style={{ display: "block", float: "left" }}>
      <CatParagraph>{catFact}</CatParagraph>
    </div>
  );
};

export default CatFact;
