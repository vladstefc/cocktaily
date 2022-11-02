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
      instructions: result.strInstructions,
      category: result.strCategory,
      type: result.strAlcoholic,
    };
  });
}
