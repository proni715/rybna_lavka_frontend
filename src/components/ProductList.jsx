import React, { Component } from "react";
// import { Card } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import axios from "axios";
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
      .get("http://localhost:9000/products")
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
      <div>
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
            <div className="row">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img src="../../rybka.jpg" alt="Риба" />
                    <span className="card-title">{product.title}</span>
                  </div>
                  <div className="card-content">
                    <p>
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
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
    );
  }
}

export default ProductList;
