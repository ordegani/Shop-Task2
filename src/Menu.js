import React from "react";

function Menu(){
  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=cocktail&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // setRecipes(data.hits);
    // if (search.includes("cocktail")) {
      console.log(data.hits);

  };
  getRecipes();
  return(
    <h1>data up</h1>
  )
}
export default Menu;