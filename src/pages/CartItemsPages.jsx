import React from 'react';
import CartItems from '../features/cart/CartItems';
import { useNavigate, useParams } from 'react-router-dom';

const CartItemsPages = () => {
    const {id}= useParams()
    const navigate = useNavigate()
    

  return (
    <div>
      <CartItems
        
        
      />
    </div>
  );
}

export default CartItemsPages;
