import React from 'react'


const Create = () => {
    
  return (
    <form className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>

        <input type="text"
         placeholder='Image Link'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         ></input>

        <input type="text"
         placeholder='title'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         ></input>

         <div className='w-1/2 flex justify-between'>

         <input type="text"
         placeholder='category'
         className='text-1xl bg-zinc-100 rounded p-3 w-[47%] mb-3'
          ></input>

         <input type="number"
         placeholder='price'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
          ></input>
         </div>

         <textarea className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         placeholder='Enter Description Here...'
         
         ></textarea>

         <div className='w-1/2'>
            <button type="submit" className='py-2 px-5 border rounded border-blue-200  text-blue-400'>Add new Product</button>

         </div>
    </form>
  )
}

export default Create