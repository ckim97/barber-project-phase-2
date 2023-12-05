import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ProfileBar from "./components/ProfileBar";
import BarberDetails from './components/BarberDetails';

import { useNavigate } from "react-router-dom";



function Home() {
    const [barbershops, setBarbershops] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/barbershops")
          .then(r => r.json())
          .then(data => setBarbershops(data))
      },[])

    const renderBarbershops = barbershops.map((barbershop) => <Card navigate={navigate} key={barbershop.id} barbershop={barbershop}/>);

    return (
        <>
          <main className="container">
            {renderBarbershops}
          </main>
        </>
      )
}

export default Home;