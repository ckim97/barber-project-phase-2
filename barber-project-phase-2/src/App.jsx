import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ProfileBar from "./components/ProfileBar";
import Profile from './Profile';

function App() {
  const [barbershops, setBarbershops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/barbershops")
      .then(r => r.json())
      .then(data => setBarbershops(data))
  },[])

  const renderBarbershops = barbershops.map((barbershop) => <Card key={barbershop.id} barbershop={barbershop}/>)


  return (
    <>
      <header className="header">
        <NavBar/>
        <ProfileBar/>
      </header>
        <h1>Slice</h1>  
      <main className="container">
        {renderBarbershops}
      </main>
    </>
  )
}

export default App
