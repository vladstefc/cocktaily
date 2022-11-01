import React from "react";

export default function CocktailId() {
  const apiURL = getCocktailById(idFromBtn);
  console.log(apiURL);
  const apiData = useFetch(apiURL);
  const mappedApiData = getCocktailByIdList(apiData);

  console.log(mappedApiData);

  return <div></div>;
}
