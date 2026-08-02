import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({
    products,
    product , 
    handleCartItems ,
}) => {


  if (!product) {
    return (
      <div className="product-details-container">
        <h2 className="not-found">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="back-btn-container">
        <Link to="/products" className="back-btn">
            ← Back to Products
        </Link>
        </div>
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <span className="product-category">{product.category}</span>

          <h1 className="product-title">{product.name}</h1>

          <p className="product-brand">
            <strong>Brand:</strong> {product.brand}
          </p>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-price">
            ₹{product.price.toLocaleString()}
          </div>

          <div className="product-meta">
            <div className="product-rating">
              ⭐ {product.rating}
            </div>

            <div className="product-stock">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </div>
          </div>

          <button className="add-cart-btn"
          onClick={handleCartItems}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;