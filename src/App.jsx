import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes, Route } from 'react-router-dom' 
import Homepage from './components/Homepage'
import AddItemForm from './components/AddItemForm'
import AllItems from './components/AllItems'

function App() {

  return (
    <>
    <Navbar />
    <main>
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/items' element={<AllItems />} />
        <Route path='/form' element={<AddItemForm/>} />
        

      </Routes>


    </main>
      
    </>
  )
}

export default App
