import React, { useContext } from 'react';
import Nav from "./Nav"
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
const Home = () => {
 const [products] =  useContext(ProductContext)   //data jo context me hai use access kiya hai
  return products ?( 
    <>
      <Nav />
      <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap '>
          {products.map((p,i) => (
              <Link key={p.id} to={`/details/${p.id}`} className='card p-3 mb-3 mr-3 border shadow rounded w-[18%] h-[54vh] flex-col justify-center items center'>
              <div className='hover:scale-110 w-full h-[70%] mb-3 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${p.image})`, }}></div>
              <h1 className='font-semibold leading-none  text-blue-400'>{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
      <Loading />
    )
};

export default Home;
