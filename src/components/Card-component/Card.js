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
  const data = useFetch(URL);
  const mappedData = getCocktailList(data);

  return (
    <div className="card mb-5" onClick={onClick}>
      <div className="card-back">
        {mappedData.map((mappedData) => {
          const ingredients = [];
          for (let i = 1; i < 16; i++) {
            if (mappedData[`ingredients${i}`]) {
              ingredients.push(mappedData[`ingredients${i}`]);
            }
          }
          const measure = [];
          for (let i = 1; i < 16; i++) {
            if (mappedData[`measure${i}`]) {
              measure.push(mappedData[`measure${i}`]);
            }
          }

          return (
            <CardBack
              key={id}
              measure={measure}
              ingredients={ingredients}
              instructions={mappedData.instructions}
            />
          );
        })}
      </div>
      <div className="card-front">
        <div className="text-center">
          <img src={imgSrc} alt="cocktail-picture" className="h-80" />
          <div className="m-2 p-2 font-bold">{title}</div>
          <p className="text-sm p-2">Click on card for instructions</p>
        </div>
      </div>
    </div>
  );
}
