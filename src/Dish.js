import React from "react";

function Dish({ title, image, onClick }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <img className="dishhImage" src={image} alt="" />
      <button
        className="saveButton"
        onClick={() => onClick({ title, image })}
        type="Submit"
      >
        save
      </button>
    </div>
  );
}
export default Dish;
