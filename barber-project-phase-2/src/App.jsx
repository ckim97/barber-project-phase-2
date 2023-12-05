import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ProfileBar from "./components/ProfileBar";

import { Outlet } from "react-router-dom";

function App() {

  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false)
  
  

  return (
    <>
      <header className="header">
        <NavBar/>
      </header>
      <main className="container">
        <h1>Slice</h1>  
        <div className='contents'>

        <Outlet context={{search, setIsSearch}}/>
        </div>
      </main>
    </>
  )
}

export default App
