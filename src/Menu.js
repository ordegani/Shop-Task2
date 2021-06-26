import React from "react";
import {useState} from "react";

function Menu(){

    const [dish, setdish] = useState("");

  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";
  const getDish = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setdish(data.hits);
    // console.log(dish);
  };
getDish();
  return(
    <h1>data up</h1>

  )
}
export default Menu;