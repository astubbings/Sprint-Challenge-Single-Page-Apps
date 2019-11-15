import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

// import './Card.css';

const CharacterCard = props => {
  return (
    <div className="char-card">
      <h2>{props.char.name}</h2>
      <h3>{props.char.status}</h3>
      <h3>{props.char.gender}</h3>
    </div>
  );
};

export default CharacterCard;