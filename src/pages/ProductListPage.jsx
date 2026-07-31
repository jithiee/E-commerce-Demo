import React, { useContext } from 'react';
import ProductList from '../features/product/ProductList';
import { ProductContext } from '../context/ProductContext';

const ProductListPage = () => {

  const {products } = useContext(ProductContext)
 
  
  return (
    <div>
      <ProductList
       products={products}
      />
    </div>
  );
}

export default ProductListPage;
