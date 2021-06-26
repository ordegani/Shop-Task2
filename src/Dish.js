import React from "react";

function Dish({title, image}) {
    return(
        <div className="container">
            
        <h1>{title}</h1>
        <div className="dishImage">{image}</div>
        </div>
    )
}
export default Dish;