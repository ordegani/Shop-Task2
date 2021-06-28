import React from "react";
import { useState } from "react";
import Dish from "./Dish";
import ShowSaved from "./ShowSaved";

function Menu({ onSave }) {
  const [dishes, setdishes] = useState([]);
  // const savedList=[];

  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";
  const getDish = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setdishes(data.hits);
    // console.log(dish);
  };
  getDish();

  const save = (dish) => {
    onSave(dish);
  };
  return (
    <div className="dishesContainer">
      {dishes.map((dish, index) => (
        <Dish
          key={index}
          title={dish.recipe.label}
          image={dish.recipe.image}
          onClick={() => save(dish)}
        />
      ))}
    </div>
  );
}
export default Menu;
