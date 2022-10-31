import React, { useState } from "react";
import Card from "./Card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";

export default function FlippableCard(props) {
  const [showFront, setShowFront] = useState(true);
  const { cocktail } = props;
  console.log(cocktail);
  return (
    <div className="flippable-card-container flex flex-wrap flex-row">
      {cocktail.map((cocktail) => {
        return (
          <Card
            key={cocktail.id}
            imgSrc={cocktail.thumbnail}
            title={cocktail.title}
            ingredients={cocktail.ingredients}
            instructions={cocktail.instructions}
            onClick={() => {
              setShowFront((isfront) => !isfront);
            }}
          />
        );
      })}
    </div>
  );
}
