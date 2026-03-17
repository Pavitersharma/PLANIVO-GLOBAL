import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import Hero from './component/Hero'
import Homepage from './pages/Homepage'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
    <Routes>
      <Route   path='/' element={<Homepage/>}/>
    <Route path='/about'  element={ <About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/portfolio'  element={<Portfolio/>}/>
    <Route path='/contact'  element={<Contact/>}/>
    </Routes>
     

    </>
  )
}

export default App
