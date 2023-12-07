import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import ProfileBar from "./components/ProfileBar";

import { Outlet } from "react-router-dom";

function App() {

  const [search, setSearch] = useState("");

  const [isSearch, setIsSearch] = useState(false);
  const [isApp, setIsApp] = useState(true);
  const [isServices, setIsServices] = useState(false);
  
  

  return (
    <>
      <header className="header">
        <NavBar search={search} setSearch={setSearch} isSearch={isSearch} setIsSearch={setIsSearch} setIsApp={setIsApp} setIsServices={setIsServices}/>
      </header>
      <main className={isApp ? "container-bg-image" : "container"}>
        {/* <h1>Slice</h1>   */}
        <div className={!isServices ? "contents" : "services-contents"}>

        <Outlet context={{search, setIsSearch, setIsApp, setIsServices}}/>
        </div>
      </main>
    </>
  )
}

export default App
