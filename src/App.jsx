import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import './components/NavBar.css'
import MainRouter from './Routes/MainRouter'



function App() {

  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  )
}

export default App
