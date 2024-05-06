import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Slide } from './components/Slide.jsx'
import Popular from './components/Popular.jsx'




function App() {
  return (
    <>
      <Navbar />
      <Slide />
      <Popular />
    </>
  )
}

export default App
