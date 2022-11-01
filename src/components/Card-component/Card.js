import React, { useState } from "react";
import "./card.css";
import "./flip-transition.css";

import { getCocktailByIdList } from "../../api/adaptors";
import { getCocktailById } from "../../api/options";

import useFetch from "../../hooks/useFetch";

export default function Card(props) {
  const { imgSrc, title, ingredients, instructions, onClick } = props;
  const [idFromBtn, setIdFromBtn] = useState();

  // const apiURL = getCocktailById(idFromBtn);
  // const apiData = useFetch(apiURL);
  // const mappedApiData = getCocktailByIdList(apiData);

  return (
    <div className="card mb-5" onClick={onClick}>
      <div className="card-back">
        <div>
          Instructions: <br />
          {instructions}
        </div>
      </div>
      <div className="card-front">
        <div className="text-center">
          <img src={imgSrc} alt="cocktail-picture" className="h-80" />
          <div className="m-2 p-2 font-bold">{title}</div>
          <div>
            Ingredients: <br />
            {ingredients}
          </div>
          <p className="text-sm p-2">Click on card for instructions</p>
        </div>
      </div>
    </div>
  );
}
