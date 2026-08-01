import React, { useContext } from 'react';
import ProductDetails from '../features/product/ProductDetails';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {

  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  return (
    <div>

      <ProductDetails
        products={products}
        id={id}
        product={product}
      />

    </div>
  );
}

export default ProductDetailsPage;
