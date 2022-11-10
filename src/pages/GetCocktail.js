import React, { useState } from "react";
import Layout from "../components/Layout";
import "./GetCocktail.css";

import { Button } from "@material-tailwind/react";

import FlippableCard from "../components/Card-component/FlippableCard";
import Pagination from "../components/Pagination";

import { getCocktailList } from "../api/adaptors";
import { getCocktailByIngredient } from "../api/options";

import useFetch from "../hooks/useFetch";
import useCardsOnPage from "../hooks/useCardsOnPage";

export default function GetCocktail() {
  const [ingredient, setIngredient] = useState("");
  const [cocktailEndpoint, setCocktailEndpoint] = useState("");

  const data = useFetch(cocktailEndpoint);
  const mappedData = getCocktailList(data);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsOnPage = useCardsOnPage();
  // const [postsPerPage, setPostsPerPage] = useState(cardsOnPage);

  const lastPostIndex = currentPage * cardsOnPage;
  const firstPostIndex = lastPostIndex - cardsOnPage;
  const currentPosts = mappedData.slice(firstPostIndex, lastPostIndex);

  // End of Pagination

  const handleClick = () => {
    const cocktailEndpointByIngredient = getCocktailByIngredient(ingredient);
    setCocktailEndpoint(cocktailEndpointByIngredient);
  };

  return (
    <Layout>
      <div className="flex flex-col content-center justify-evenly m-auto">
        <div className="w-80 flex flex-col justify-between mb-2 content-center m-auto py-5 text-black">
          <h1 className="text-white mb-4 text-2xl">
            Please type an ingredient:
          </h1>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Type an ingredient"
              className="text-white"
              value={ingredient}
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
            />
            <Button variant="filled" onClick={handleClick} size="sm">
              Search
            </Button>
          </div>
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
        postsPerPage={cardsOnPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Layout>
  );
}
