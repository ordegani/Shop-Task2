import React from "react";

function Dish({ title, image }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <img className="dishhImage" src={image} alt="" />
    </div>
  );
}
export default Dish;
