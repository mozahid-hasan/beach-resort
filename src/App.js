import React from 'react'
import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/rooms' element={<Rooms></Rooms>} />
        <Route path='/rooms/:slug' element={<SingleRoom></SingleRoom>} />
        <Route path='*' element={<Error></Error>} />
      </Routes>
    </>
  )
}

export default App
