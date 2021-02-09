import React from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
//import routes from'../routes'

export const StorePage = () =>{


    return(
        <div className="container">
            <Header/>
            <ProductList/>
        </div>
    )
}