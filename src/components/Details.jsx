import React, { useEffect, useState } from 'react';
import axios from "../utils/axios"
import { useParams } from 'react-router-dom';
import Loading from './Loading';
const Details = () => {
  const {id} = useParams()  //use params ko use kiya hai kyoki ye data me se id nikal kar dega {id} isme
 const [product, setproduct] = useState(null)  //iska use isliye kiya hai taki data ko save kar paye aur fir use kar paye
 const getsingleproduct = async() => {
  try {
    const {data} = await axios.get(`/products/${id}`) 
    setproduct(data)
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(()=>{
  getsingleproduct()
 })

  return product ? (
    <div className="w-[70%] flex items-center justify-center h-full m-auto p-[10%]">
      <img className="object-contain w-[55%] h-[70%]" src={`${product.image}`} alt="" />
      <div className="content ml-10">
        <h1 className="text-3xl -mt-10">{product.title}</h1>
        <h3 className="text-xl mb-2 font-semibold text-slate-400">{product.category}</h3>
        <h2 className="text-blue-400 font-semibold">{product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="py-3 mr-6 px-5 border font-semibold rounded border-blue-200 text-blue-400">Edit</Link>
        <button
          
          className="py-3 px-5 border font-semibold rounded border-blue-200 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  )
};

export default Details;
