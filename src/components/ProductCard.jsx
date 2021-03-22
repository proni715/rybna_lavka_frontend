import React, { useState } from "react";
import axios from "axios";
import rybka from "./rybka.jpg";
import { getCookieFromBrowser } from "../utils/cookie";

const ProductCard = (product) => {
  const [inCart, setIn] = useState(0);
  const token = getCookieFromBrowser("Authorization");
  const toSend = {
    product: product.product.id,
    count: 1,
  };

  const removeProductHandler = async () => {
    await axios("https://rybna-lavka-api.herokuapp.com/baskets/remove", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: toSend,
    })
      .then((res) => {
        if (res.data.token) {
        } else console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const productHandler = async () => {
    await axios("https://rybna-lavka-api.herokuapp.com/baskets", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: toSend,
    })
      .then((res) => {
        if (res.data.token) {
        } else console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div id="paper">
      <img id="poster" src={rybka} />
      <h2>Featured</h2>
      <h1>
        {product.product.title.charAt(0).toUpperCase() +
          product.product.title.slice(1)}
      </h1>
      <p>
        Down on the West Coast where the sand meets the crashing waves and your
        dreams come true.
      </p>
      <div className="action-block">
        {product.product.discount !== 0 ? (
          <p id="discount-price">
            <p className='old-price'>{product.product.price} UAH</p>{product.product.discountPrice} UAH/{product.product.units.count} 
            {product.product.units.type}
          </p>
        ) : (
          <p id="price">
            {product.product.price} UAH/{product.product.units.count}
            {product.product.units.type}
          </p>
        )}
        {inCart ? (
          <a
            id="btn"
            onClick={() => {
              setIn(false);
              removeProductHandler();
            }}
          >
            Remove
          </a>
        ) : (
          <a
            id="btn"
            onClick={() => {
              setIn(true);
              productHandler();
            }}
          >
            To cart
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
