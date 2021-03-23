import React, { useState } from "react";
import axios from "axios";
import rybka from "./rybka.jpg";
import { getCookieFromBrowser } from "../utils/cookie";

const ProductInCartCard = (product) => {
  const [inCart, setIn] = useState(0);
  const token = getCookieFromBrowser("Authorization");
  const toSend = {
    product: product.product.id,
    count: 1,
  };

  return (
    <div id="cart-paper">
      <img id="cart-poster" src={rybka} />

      <div className="cart-action">
        <h1>{product.product.product.title}</h1>
        <div id="inner-cart-action">
          <div>
            {product.product.product.discount !== 0 ? (
              <p id="discount-price">
                <p className="old-price">{product.product.product.price} UAH</p>
                {product.product.product.discountPrice} UAH/
                {product.product.product.units.count}
                {product.product.product.units.type}
              </p>
            ) : (
              <p id="price">
                {product.product.product.price} UAH/
                {product.product.product.units.count}
                {product.product.product.units.type}
              </p>
            )}
          </div>
          <div id="cart-action-price">
            <a className="btn">
              <i className="material-icons">arrow_upward</i>
            </a>
            <p className="cart-price">{product.product.count}</p>
            <a className="btn-custom btn">
              <i className="material-icons">arrow_downward</i>
            </a>
            <a id="btn">Remove</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCartCard;
