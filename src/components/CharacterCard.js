import React from "react";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2%;
  border: 3px solid greenyellow;
  padding: 0 2%;
  background-color: lightgoldenrodyellow;
`;

const Header2 = styled.h2`
  color: blue;
`;

const Header3 = styled.h3`
  color: olivedrab;
`;


const CharacterCard = props => {
  return (
    <CardContainer>
      <Header2>{props.char.name}</Header2>
      <Header3>Status: {props.char.status}</Header3>
      <Header3>Gender: {props.char.gender}</Header3>
    </CardContainer>
  );
};

export default CharacterCard;


// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

// import './Card.css';