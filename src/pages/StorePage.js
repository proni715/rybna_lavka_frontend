import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

export const StorePage = () => {
  return (
    <div className="page">
      <Navbar />
      <div id="store-back" className="page-container">
         <div>
              <br/>
              <div id="store-container" className="store-container container">
                  <h1 className="page-title">Store</h1>
                  <p className="center-align white-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                          tristique arcu, non consequat magna fermentum ac. Cras ut
                          ultricies eros. Maecenas eros justo, ullamcorper a sapien id,
                          viverra ultrices eros. Morbi sem neque, posuere et pretium
                          eget, bibendum sollicitudin lacus. Aliquam eleifend
                          sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet
                          semper molestie. Morbi massa odio, condimentum sed ipsum ac,
                          gravida ultrices erat. Nullam eget dignissim mauris, non
                          tristique erat. Vestibulum ante ipsum primis in faucibus orci
                          luctus et ultrices posuere cubilia Curae;
                  </p>
              </div>
              <ProductList/>
           </div>
      </div>
      <Footer />
    </div>
  );
};
