import React from "react";

export default function CardBack(props) {
  const {
    instructions,
    ingredients1,
    ingredients2,
    ingredients3,
    ingredients4,
    ingredients5,
    ingredients6,
    ingredients7,
    ingredients8,
    ingredients9,
    ingredients10,
    ingredients11,
    ingredients12,
    ingredients13,
    ingredients14,
    ingredients15,
  } = props;

  return (
    <div className="">
      <span className="font-bold mb-4 pb-3">Ingredients:</span>
      <p className="mt-1 mb-2">
        {ingredients1}, {ingredients2}, {ingredients3}, {ingredients4},
        {ingredients5}, {ingredients6}, {ingredients7}, {ingredients8},
        {ingredients9}, {ingredients10}, {ingredients11}, {ingredients12},
        {ingredients13}, {ingredients14}, {ingredients15},
      </p>
      <span className="font-bold mb-4 pb-3">Instructions:</span>
      <p className="mt-3 text-center">{instructions}</p>
    </div>
  );
}
