import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("https://rybna-lavka-api.herokuapp.com/products")
      .then((response) => {
        console.log(response);
        this.setState({ products: response.data.rows });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
