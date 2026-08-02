import React, { useContext, useState } from 'react';
import ProductList from '../features/product/ProductList';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {

  const {products , loading } = useContext(ProductContext)
  const navigate = useNavigate()
  const [inputData , setInputData] = useState('')

  const handleChange=(e)=>{
    setInputData(e.target.value)
  }

  const searchData = products.filter((item)=> item.name.toLowerCase().includes(inputData.trim().toLowerCase()) || item.description.trim().toLowerCase().includes(inputData.toLowerCase()))
  
  return (
    <div>
      <ProductList
       products={searchData}
       navigate={navigate}
       loading={loading}
       inputData={inputData}
       handleChange={handleChange}
      />
    </div>
  );
}

export default ProductListPage;
