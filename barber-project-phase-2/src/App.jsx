import React, { useState, useEffect } from 'react'

import NavBar from "./components/NavBar";

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
        {isApp ? 
        <div className="home-page">
          <h1 className="home-page-content">"Barbershops - Where men can be men."</h1>
          </div> :
          null}
        <div className={!isServices ? "contents" : "services-contents"}>

        <Outlet context={{search, setIsSearch, setIsApp, setIsServices}}/>
        </div>
      </main>
    </>
  )
}

export default App
