import React from 'react'


const Edit = () => {
 
  return (
    <form  className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Edit Product</h1>

        <input type="text"
         placeholder='Image Link'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="image"
         ></input>

        <input type="text"
         placeholder='title'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="title"
          ></input>

         <div className='w-1/2 flex justify-between'>

         <input type="text"
         placeholder='category'
         className='text-1xl bg-zinc-100 rounded p-3 w-[47%] mb-3'
         name="category"
         ></input>

         <input type="number"
         placeholder='price'
         className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name="price"
          ></input>
         </div>

         <textarea className='text-1xl h-fit bg-zinc-100 rounded p-3 w-1/2 mb-3'
         placeholder='Enter Description Here...'
         name="description"
         
         ></textarea>

         <div className='w-1/2'>
            <button type="submit" className='py-2 px-5 border rounded border-blue-200  text-blue-400'>Edit Product</button>

         </div>
    </form>
  )
}

export default Edit