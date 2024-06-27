import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {

  return (
    <div className='h-screen w-screen  flex'>
     
      <Link to="/" className='absolute left-[18%] text-blue-400 font-semibold text-xl top-[3%]'>Home</Link>
 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>

      


    </div>
  )
}

export default App