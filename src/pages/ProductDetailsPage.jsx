import React, { useContext } from 'react';
import ProductDetails from '../features/product/ProductDetails';
import { ProductContext } from '../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailsPage = () => {

  const { products , cartItem , setCartItem} = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const navigation = useNavigate()

  const handleCartItems =()=>{
      setCartItem(product)
      navigation(`/cart/${product.id}`)
  }

  return (
    <div>

      <ProductDetails
        products={products}
        product={product}
        navigation={navigation}
        handleCartItems={handleCartItems}
      />

    </div>
  );
}

export default ProductDetailsPage;
