import React, { useContext } from 'react';
import ProductList from '../features/product/ProductList';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {

  const {products , loading } = useContext(ProductContext)
  const navigate = useNavigate()
  
  return (
    <div>
      <ProductList
       products={products}
       navigate={navigate}
       loading={loading}
      />
    </div>
  );
}

export default ProductListPage;
