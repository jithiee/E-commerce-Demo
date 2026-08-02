import React, { useContext } from 'react';
import CartItems from '../features/cart/CartItems';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const CartItemsPages = () => {
    const {products} = useContext(ProductContext)
    const {id}= useParams()
    const navigate = useNavigate()
    const product = products.find((item) => item.id == id);

  
  return (
    <div>
      <CartItems
        navigate ={navigate}
        product={product}
        
      />
    </div>
  );
}

export default CartItemsPages;
