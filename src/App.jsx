import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Conferencepage from './pages/Conferencepage'
import Locationpage from './pages/Locationpage'
import Gallerypage from './pages/Gallerypage'
import Heritagepage from './pages/Heritagepage'
import Collection from './components/Collection'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/anjuman' element={<Conferencepage/>} />
          <Route path='/manzil' element={<Locationpage/>} />
          <Route path='/galereya' element={<Gallerypage/>} />
          <Route path='/ilmiy-meroslar' element={<Heritagepage/>} />
          <Route path='/collections/:id' element={<Collection/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
