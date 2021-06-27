import React from 'react';
import Menu from "./Menu";
import SavedItem from './SavedItem';

export default function ShowSaved({saved}) {
    console.log(saved)
    return (
        <div className="savedContainer">
        {saved.map((dish, index) => (
          <SavedItem key={index} title={dish?.recipe?.label} image={dish?.recipe?.image} />
          
        ))}
      </div>);
}
