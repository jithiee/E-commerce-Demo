import axios, { create } from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

const ProductProvider =({children})=>{
    const [products , setProducts ] = useState([])
    const [Loading , setLoading ] = useState(false)

    useEffect(()=>{
        fetchProducts()
    }, [])

    const fetchProducts =async()=>{
        setLoading(true)
        const response = await axios.get("https://product-server-byy6.onrender.com/products")
        const data = await response.data
        setProducts(data)
        setLoading(false)
    }

    return(
        <>
        <ProductContext.Provider value={{
            products ,
            setProducts ,
            Loading , 
            setLoading
        }}>
             {children}
        </ProductContext.Provider>
        
        </>
    )
}

export default ProductProvider;