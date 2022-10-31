import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./GetCocktail.css";

import FlippableCard from "../components/Card-component/FlippableCard";
import { getCocktailList } from "../api/adaptors";
import useFetch from "../hooks/useFetch";

import { getCocktailByIngredient } from "../api/options";

export default function GetCocktail() {
  const [ingredient, setIngredient] = useState("");
  const [cocktailEndpoint, setCocktailEndpoint] = useState("");
  const [cocktailById, setCocktailById] = useState([]);
  const data = useFetch(cocktailEndpoint);
  const mappedData = getCocktailList(data);
  console.log(mappedData);

  const handleClick = () => {
    const cocktailEndpointByIngredient = getCocktailByIngredient(ingredient);
    setCocktailEndpoint(cocktailEndpointByIngredient);
    setCocktailById(mappedData.idDrink);
    console.log(cocktailById);
    console.log(ingredient);
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
