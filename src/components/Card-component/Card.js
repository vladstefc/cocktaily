import React from "react";
import "./card.css";
import "./flip-transition.css";

export default function Card(props) {
  const { imgSrc, title, ingredients, instructions, onClick } = props;
  return (
    <div className="card mb-5" onClick={onClick}>
      <div className="card-back">
        <div>{instructions}</div>
      </div>
      <div className="card-front">
        <div className="text-center">
          <img src={imgSrc} alt="cocktail-picture" className="h-80" />
          <div className="mb-2">{title}</div>
          <div>{ingredients}</div>
          <p className="text-sm">Click on card for instructions</p>
        </div>
      </div>
    </div>
  );
}
