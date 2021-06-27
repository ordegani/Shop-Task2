import React from "react";

function Dish({ title, image }) {
  function save(params) {
    console.log("1");
    
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <img className="dishhImage" src={image} alt="" />
      <button className="save" onClick="save"></button>
    </div>
  );
}
export default Dish;
