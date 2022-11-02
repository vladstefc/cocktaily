import React, { useState } from "react";
import "./card.css";
import "./flip-transition.css";

import CardBack from "./CardBack";

import { getCocktailById } from "../../api/options";
import { getCocktailList } from "../../api/adaptors";

import useFetch from "../../hooks/useFetch";

export default function Card(props) {
  const { imgSrc, title, onClick, id } = props;

  const URL = getCocktailById(id);
  console.log(URL);
  const data = useFetch(URL);
  const mappedData = getCocktailList(data);

  console.log("data", mappedData);

  return (
    <div className="card mb-5" onClick={onClick}>
      <div className="card-back">
        {mappedData.map((mappedData) => {
          return (
            <CardBack
              ingredients1={mappedData.ingredients1}
              ingredients2={mappedData.ingredients2}
              ingredients3={mappedData.ingredients3}
              ingredients4={mappedData.ingredients4}
              ingredients5={mappedData.ingredients5}
              ingredients6={mappedData.ingredients6}
              ingredients7={mappedData.ingredients7}
              ingredients8={mappedData.ingredients8}
              ingredients9={mappedData.ingredients9}
              ingredients10={mappedData.ingredients10}
              ingredients11={mappedData.ingredients11}
              ingredients12={mappedData.ingredients12}
              ingredients13={mappedData.ingredients13}
              ingredients14={mappedData.ingredients14}
              ingredients15={mappedData.ingredients15}
              instructions={mappedData.instructions}
            />
          );
        })}
      </div>
      <div className="card-front">
        <div className="text-center">
          <img src={imgSrc} alt="cocktail-picture" className="h-80" />
          <div className="mt-5 p-2 font-bold">{title}</div>
          <p className="text-sm p-2">Click on card for instructions</p>
        </div>
      </div>
    </div>
  );
}
