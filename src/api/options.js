const API_URL = "https://thecocktaildb.com/api/json/v1/1/search.php?i=";

export function getCocktailByIngredient(dataFromBtn) {
  return `${API_URL}?i=${dataFromBtn}`;
}
