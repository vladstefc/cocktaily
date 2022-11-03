import React, { useState } from "react";
import Card from "./Card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";

export default function FlippableCard(props) {
  const [showFront, setShowFront] = useState(true);
  const { title, imgSrc, ingredients, instructions, id } = props;

  return (
    <CSSTransition in={showFront} timeout={300} classNames="flip">
      <Card
        id={id}
        title={title}
        imgSrc={imgSrc}
        ingredients={ingredients}
        instructions={instructions}
        showFront={showFront}
        onClick={() => {
          setShowFront((isfront) => !isfront);
        }}
      />
    </CSSTransition>
  );
}
