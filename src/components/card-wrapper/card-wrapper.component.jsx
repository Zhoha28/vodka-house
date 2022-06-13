import React, { Component } from "react";
import { CardComponent } from "../card/card.component";
import "./card-wrapper.style.css";
// import { CardComponent } from "../card/card.component";

export class CardWrapperComponent extends Component {
  constructor() {
    super();
    // keeping state empty at first - load from API fetch
    this.state = {
      drink: [],
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka")
      .then((response) => response.json())
      .then((dr) => {
        console.log(dr.drinks);
        this.setState({ drink: dr.drinks });
      });
  }
  render() {
    return (
      <div className="card-wrapper">
        {this.state.drink.slice(10, 22).map((drink) => (
          <CardComponent key={drink.idDrink} drinks={drink}></CardComponent>
        ))}
      </div>
    );
  }
}
export default CardWrapperComponent;
