import React from "react";
import "./card.style.css";

export const CardComponent = (props) => {
  return (
    <div className="CardComponent">
      <img alt='drinks' src={props.drinks.strDrinkThumb}></img>
      <h2 key={props.drinks.idDrink}> {props.drinks.strDrink}</h2>
    </div>
  );
};
