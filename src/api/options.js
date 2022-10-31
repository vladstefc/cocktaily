const API_URL = "https://thecocktaildb.com/api/json/v1/1/";

export function getCocktailByIngredient(dataFromBtn) {
  return `${API_URL}/filter.php?i=${dataFromBtn}`;
}

export function getCocktailById(idFromBtn) {
  return `${API_URL}/lookup.php?i=${idFromBtn}`;
}
