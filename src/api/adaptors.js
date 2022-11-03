export function getCocktailList(apiResponse) {
  if (!apiResponse || !apiResponse.drinks) {
    return [];
  }

  return apiResponse.drinks.map((result) => {
    return {
      id: result.idDrink,
      thumbnail: result.strDrinkThumb,
      title: result.strDrink,
      ingredients1: result.strIngredient1,
      ingredients2: result.strIngredient2,
      ingredients3: result.strIngredient3,
      ingredients4: result.strIngredient4,
      ingredients5: result.strIngredient5,
      ingredients6: result.strIngredient6,
      ingredients7: result.strIngredient7,
      ingredients8: result.strIngredient8,
      ingredients9: result.strIngredient9,
      ingredients10: result.strIngredient10,
      ingredients11: result.strIngredient11,
      ingredients12: result.strIngredient12,
      ingredients13: result.strIngredient13,
      ingredients14: result.strIngredient14,
      ingredients15: result.strIngredient15,
      measure1: result.strMeasure1,
      measure2: result.strMeasure2,
      measure3: result.strMeasure3,
      measure4: result.strMeasure4,
      measure5: result.strMeasure5,
      measure6: result.strMeasure6,
      measure7: result.strMeasure7,
      measure8: result.strMeasure8,
      measure9: result.strMeasure9,
      measure10: result.strMeasure10,
      measure11: result.strMeasure11,
      measure12: result.strMeasure12,
      measure13: result.strMeasure13,
      measure14: result.strMeasure14,
      measure15: result.strMeasure15,
      instructions: result.strInstructions,
      category: result.strCategory,
      type: result.strAlcoholic,
    };
  });
}
