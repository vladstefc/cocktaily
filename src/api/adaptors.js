export function getCocktailList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  return apiResponse.response.results.map((result) => {
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
