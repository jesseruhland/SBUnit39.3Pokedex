import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const elementId = `pokecard-${id}`;
  return (
    <div className="Pokecard" id={elementId}>
      <h5>{name}</h5>
      <img src={imageSrc} alt="pokemon" />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
