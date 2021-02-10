import React from 'react'

const ProductCard = (product) => {
    return (
        
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
        
    )
}

export default ProductCard

