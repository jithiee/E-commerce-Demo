import React, { useState } from "react";
import "./ProductList.css";
import Loading from "../../components/Loading";

const ProductList = ({ 
  products , 
  navigate ,
  loading ,
  inputData,
  handleChange
}) => {
 
 

  return (
    <>
      <div className="search-container">
      <input
        type="search"
        value={inputData}
        placeholder="Search products..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
    <div className="products-container">

      { loading &&  <div>  <Loading/></div> }
      {  products.length == 0 &&     
      <div className="no-products">
        <h3>No Products Found</h3>
        <p>We couldn't find any products matching your search.</p>
      </div> }
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
      </>
  );
};

export default ProductList;