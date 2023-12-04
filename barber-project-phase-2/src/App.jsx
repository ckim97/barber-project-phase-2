import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("http://localhost:4000/barbershops")
      .then(r => r.json())
      .then(data => console.log(data))
  })


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Barber Project</h1>      
      </main>
    </>
  )
}

export default App
