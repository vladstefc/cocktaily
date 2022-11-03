import React from "react";

export default function CardBack(props) {
  const { instructions, ingredients, measure } = props;

  return (
    <div className="">
      <span className="font-bold mb-4 pb-3">Ingredients:</span>
      <p className="mt-1 mb-2">{ingredients.join(", ")}</p>
      <span className="font-bold mb-4 pb-3">Measures:</span>
      <p className="mt-1 mb-2">{measure.join(", ")}</p>
      <span className="font-bold mb-4 pb-3">Instructions:</span>
      <p className="mt-3 text-center">{instructions}</p>
    </div>
  );
}
