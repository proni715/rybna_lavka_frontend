import React, { Component } from "react";
import axios from "axios";
import { getCookieFromBrowser } from "../utils/cookie";
import ProductInCartCard from "./ProductInCartCard";

class ProductListInCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalPrice: 0,
    };
  }

  async componentDidMount() {
    const token = getCookieFromBrowser("Authorization");
    await axios
      .get("https://rybna-lavka-api.herokuapp.com/baskets", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          products: response.data.products,
          totalPrice: response.data.totalPrice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { products, totalPrice } = this.state;
    return (
      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductInCartCard key={product.id} product={product} />
          ))}

          <div className="total-cart-block">
            <h2>Your offer: {totalPrice} UAH</h2>
            <div className="inner-cart-block">
              <div>
                <p>Here will be price</p>
                <p>Here will be price with discount</p>
                <p>{totalPrice}</p>
              </div>
              <a id="btn">Offer</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductListInCart;
