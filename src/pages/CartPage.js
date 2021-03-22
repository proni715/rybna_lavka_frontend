import React from "react";
import { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductListInCart from "../components/ProductListInCart";

class CartPage extends Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <div id="store-back" className="page-container">
          <ProductListInCart />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CartPage;
