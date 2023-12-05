import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ProfileBar from "./components/ProfileBar";

import { Outlet } from "react-router-dom";

function App() {

  const [search, setSearch] = useState("");
  


  return (
    <>
      <header className="header">
        <NavBar/>
        <ProfileBar/>
        <SearchBar search={search} setSearch={setSearch}/>
      </header>
        <h1>Slice</h1>  
      <main className="container">
        <Outlet context={search}/>
      </main>
    </>
  )
}

export default App
