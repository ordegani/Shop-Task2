import React from 'react'
import Dish from "./Dish"
// import Menu from "./Menu";

export default function Saved({savedList}) {
    return (
        <div className="savedContainer">
        {savedList.map((dish, index) => (
          <Dish key={index} title={savedList.label} image={savedList.image} />
          
        ))}
      </div>);
}
