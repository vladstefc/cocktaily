import React, { useState } from "react";
import Card from "./Card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";

export default function FlippableCard(props) {
  const [showFront, setShowFront] = useState(true);
  const { cocktail } = props;
  return (
    <div className="flippable-card-container flex flex-wrap flex-row">
      {cocktail.map((cocktail, index) => {
        return (
          <CSSTransition
            in={showFront}
            timeout={300}
            classNames="flip"
            key={index}
          >
            <Card
              key={cocktail.id}
              title={cocktail.title}
              imgSrc={cocktail.thumbnail}
              ingredients={cocktail.ingredients}
              instructions={cocktail.instructions}
              onClick={() => {
                setShowFront((isfront) => !isfront);
              }}
            />
          </CSSTransition>
        );
      })}
    </div>
  );
}
