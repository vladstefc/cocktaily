import React, { useState } from "react";
import Layout from "../components/Layout";
import "./GetCocktail.css";

import FlippableCard from "../components/Card-component/FlippableCard";
import { getCocktailList } from "../api/adaptors";
import useFetch from "../hooks/useFetch";

import { getCocktailByIngredient } from "../api/options";

export default function GetCocktail() {
  const [ingredient, setIngredient] = useState([]);
  const [dataFromBtn, setDataFromBtn] = useState([]);

  const cocktailEndpoint = getCocktailByIngredient(ingredient);
  const data = useFetch(cocktailEndpoint);
  const mappedData = getCocktailList(data);

  const handleClick = () => {
    setDataFromBtn(ingredient);
    console.log(dataFromBtn);
  };
  return (
    <Layout>
      <div className="flex flex-col content-center justify-evenly m-auto">
        <div className="w-80 flex justify-between mb-2 content-center m-auto py-5 text-black">
          <input
            type="text"
            label="Insert an ingredient"
            value={ingredient}
            onChange={(e) => {
              e.preventDefault();
              setIngredient(e.target.value);
            }}
          />
          <button
            className="custom-btn btn-style"
            size="sm"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="mx-auto">
          <FlippableCard cocktail={mappedData}></FlippableCard>
        </div>
      </div>
    </Layout>
  );
}
