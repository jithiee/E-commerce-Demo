import React from "react";
import "./ProductList.css";

const ProductList = ({ products , navigate }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <div className="product-details">
            <span className="category">{product.category}</span>

            <h3>{product.name}</h3>

            <p className="brand">{product.brand}</p>

            <p className="description">
              {product.description}
            </p>

            <div className="price-rating">
              <span className="price">
                ₹{product.price.toLocaleString()}
              </span>

              <span className="rating">
                ⭐ {product.rating}
              </span>
            </div>

            <div className="stock">
              Stock: {product.stock}
            </div>

            <button onClick={()=>navigate(`/products/${product.id}`)}>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;