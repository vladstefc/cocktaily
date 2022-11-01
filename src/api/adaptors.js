export function getCocktailList(apiResponse) {
  if (!apiResponse || !apiResponse.drinks) {
    return [];
  }

  return apiResponse.drinks.map((result) => {
    return {
      id: result.idDrink,
      thumbnail: result.strDrinkThumb,
      title: result.strDrink,
      ingredients: result.strIngredient,
      instructions: result.strInstructions,
      category: result.strCategory,
      type: result.strAlcoholic,
    };
  });
}

export function getCocktailByIdList(apiResponse) {
  if (!apiResponse || !apiResponse.drinks) {
    return {};
  }

  return apiResponse.drinks.map((result) => {
    return {
      id: result.idDrink,
    };
  });
}
