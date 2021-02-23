import React from "react";
import rybka from "./rybka.jpg"

const ProductCard = (product) => {
  return (
    <div id="paper">
      <img
        id="poster"
        src={ rybka }
      />
      <h2>Featured</h2>
      <h1>{product.product.title.toUpperCase()}</h1>
      <p>
        Down on the West Coast where the sand meets the crashing waves and your
        dreams come true.
      </p>
      <p id="price"> {product.product.price} UAH/{product.product.units.count}{product.product.units.type}</p>
      <a id="btn">Read More </a>
      <div id="space"></div>
    </div>
  );
};

export default ProductCard;
