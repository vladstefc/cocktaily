export function getCocktailList(apiResponse) {
  console.log(apiResponse);
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
