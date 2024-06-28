import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/axios';
import Nav from './Nav';
const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();  //for getting search url of category
  const category = decodeURIComponent(search.split("=")[1]);  //splitting the data on the basis of category
  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);   //is line se wo category ka data ayega jispr user ne click kiya hai
      setFilteredProducts(data);                                            //yha us category ke data ko save kr liya
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category === 'undefined')                        //yha pr check kiya hai ki wo category hai toh kuch nhi krna
      setFilteredProducts(products);
    if (category !== "undefined")
      setFilteredProducts(products.filter((p) => p.category === category));    //agr category undefined nhi hai to products ko  filter kar liya iski zaroorat nhi thi par fir bhi kiya taki specific data hi show ho isse user experiece will be good and good for navigation
  }, [category, products]);



  return products ? (
    <>
      <Nav />
      <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap '>
        {filteredProducts && filteredProducts.map((p) => (
          <Link key={p.id} to={`/details/${p.id}`} className='card p-3 mb-3 mr-3 border shadow rounded w-[18%] h-[54vh] flex-col justify-center items center'>
            <div className='hover:scale-110 w-full h-[70%] mb-3 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${p.image})`, }}></div>
            <h1 className='font-semibold leading-none  text-blue-400'>{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
