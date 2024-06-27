import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

const Nav = () => {
 
const [product] = useContext(ProductContext)

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()})`
  }

  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 overflow-x-hidden overflow-y-auto'>
        <a href='/create' className='py-3 px-5 border rounded border-blue-200  text-blue-400'>Add new Product</a>
        <hr className='my-3 w-[80%]' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <div className='w-[80%]'>

          {distinct_category.map((c,i) => (
              <Link  className='mb-3 flex items-center gap-1 font-semibold'>
              <span style={{backgroundColor:color()}} className='block rounded-full w-[15px] h-[15px]'></span>{""}{c}
            </Link>
          ))}
          
         
        </div>
      </nav>
  )
}

export default Nav
