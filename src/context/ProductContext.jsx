import axios, { create } from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

const ProductProvider =({children})=>{
    const [products , setProducts ] = useState([])

    useEffect(()=>{
        fetchProducts()
    }, [])

    const fetchProducts =async()=>{
        const response = await axios.get("https://product-server-byy6.onrender.com/products")
        const data = await response.data
        setProducts(data)
    }

    return(
        <>
        <ProductContext.Provider value={{
            products ,
            setProducts
        }}>
             {children}
        </ProductContext.Provider>
        
        </>
    )
}

export default ProductProvider;