import React from "react";
import CocktailCard from "./CocktailCard";

import Row from "react-bootstrap/Row";

export default function CocktailList(props) {
  const { cocktailList } = props;

  return (
    <Row key={cocktail.id}>
      {cocktailList.map((cocktail) => {
        return (
          <CocktailCard
            imgSrc={cocktail.thumbnail}
            title={cocktail.title}
            ingredients={cocktail.ingredients}
            instructions={cocktail.instructions}
          />
        );
      })}
    </Row>
  );
}
