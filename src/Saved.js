import React from 'react'
import Dish from "./Dish"

export default function Saved({savedList}) {

    return (
        <div className="savedContainer">
        {savedList.map((dish, index) => (
          <Dish key={index} title={dish.label} image={dish.image} />
          
        ))}
      </div>);
}
