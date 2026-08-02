import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const CartItems = ({product}) => {
  const {cartItem} = useContext(ProductContext)
  console.log(product);
  console.log(cartItem);
  
  return (
    <div>
      <h1>cart items </h1>
      <div>
        <p>{product.name}</p>
       
      </div>
    </div>
  );
}

export default CartItems;
