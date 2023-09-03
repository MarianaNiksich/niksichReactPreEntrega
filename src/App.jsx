import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import './components/NavBar.css'
import ItemListContainer from './components/ItemListContanainer'



function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer titulo="¡Bienvenidos a Book Storage!" parrafo="¡Descubre un mundo de conocimiento en nuestra librería online! Encuentra los mejores libros en todas las categorías imaginables y sumérgete en historias cautivadoras, aprendizaje fascinante y descubrimientos asombrosos." />
    </>
  )
}

export default App
