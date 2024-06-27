import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext()

const Context = (props) => {                // yaha pr props ka use isliye kr rhe hai kyoki humne app.jsx ko wrap kiya hai aur app.jsx ke sare childs context ko access kr paye

  const [product, setproducts] = useState(null)

  const getProducts = async() =>{
    try {
      const {data} = await axios.get("/products")
      setproducts(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getProducts()
  },[])
  return (
    <ProductContext.Provider value={[product, setproducts]}>
        {props.children}                              {/* yaha pr props ka use isliye kr rhe hai kyoki humne app.jsx ko wrap kiya hai aur app.jsx ke sare childs context ko access kr paye */}
    </ProductContext.Provider>
  )
}

export default Context