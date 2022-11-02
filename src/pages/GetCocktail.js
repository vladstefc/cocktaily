import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./GetCocktail.css";

import FlippableCard from "../components/Card-component/FlippableCard";
import Pagination from "../components/Pagination";

import { getCocktailList, getCocktailByIdList } from "../api/adaptors";
import { getCocktailByIngredient, getCocktailById } from "../api/options";

import useFetch from "../hooks/useFetch";

export default function GetCocktail() {
  const [ingredient, setIngredient] = useState("");
  const [cocktailEndpoint, setCocktailEndpoint] = useState("");
  const [endpointById, setEndpointById] = useState("");
  const [idFromBtn, setIdFromBtn] = useState();

  const data = useFetch(cocktailEndpoint);
  const mappedData = getCocktailList(data);

  // const { id } = mappedData[0];

  console.log("mappedData getcocktail", mappedData);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = mappedData.slice(firstPostIndex, lastPostIndex);

  // End of Pagination

  const handleClick = () => {
    const cocktailEndpointByIngredient = getCocktailByIngredient(ingredient);
    setCocktailEndpoint(cocktailEndpointByIngredient);
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
          <div className="flippable-card-container flex flex-wrap flex-col gap-8 justify-center content-center">
            {currentPosts.map((cocktail) => {
              return (
                <FlippableCard
                  key={cocktail.id}
                  id={cocktail.id}
                  title={cocktail.title}
                  imgSrc={cocktail.thumbnail}
                  ingredients={cocktail.ingredients}
                  instructions={cocktail.instructions}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        totalPosts={mappedData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Layout>
  );
}
