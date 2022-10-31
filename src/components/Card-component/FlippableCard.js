import React, { useState } from "react";
import Card from "./Card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";

export default function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((isfront) => !isfront);
          }}
        />
      </CSSTransition>
    </div>
  );
}
