import React, { Component } from "react";
// import { Card } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import axios from "axios";
import ProductCard from './ProductCard'
import "./ProductList.css";

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
      <div className='products-container'>
              <div className="products-grid">
        {products.map(
          //   product => {
          //     <div key={product.id} className="card">
          //       <img src="jeans3.jpg" alt="product" style="width:100%"/>
          //       <h1>{product.title}</h1>
          //       <p class="price">{product.price}</p>
          //       <p>{product.units.count} {product.units.type}</p>
          //       <p>
          //         <button>Buy</button>
          //       </p>
          //     </div>;
          //   }
          (product) => (
            <ProductCard product={product}/>
          )
          // ,
          // (product) => (
          //   <div key={product.id} className="card">
          //     <h4>{product.title}</h4>
          //     <p className="price">{product.price} UAH</p>
          //     <p>
          //       {product.units.count} {product.units.type}
          //     </p>
          //     <button>Buy</button>
          //   </div>
          // )
        )}
      </div>
      </div>
    );
  }
}

export default ProductList;
