import React, { useState, useEffect } from 'react'

import './App.css'
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import ProfileBar from "./components/ProfileBar";
import BarberDetails from './components/BarberDetails';
import { Outlet, useOutletContext } from "react-router-dom";

import { useNavigate } from "react-router-dom";



function Home() {
    const [barbershops, setBarbershops] = useState([]);
    const navigate = useNavigate();

    const {search, setIsSearch} = useOutletContext();

    console.log(search)

    useEffect(() => {
      setIsSearch(true)
        fetch("http://localhost:4000/barbershops")
          .then(r => r.json())
          .then(data => {
            console.log(data)
            setBarbershops(data)
        })
      },[]);



    const searchedBarbershops = barbershops.filter((barbershop) => barbershop.name.toLowerCase().includes(search.toLowerCase()));

    const renderBarbershops = searchedBarbershops.map((barbershop) => <Card navigate={navigate} key={barbershop.id} barbershop={barbershop}/>);

    return (
        <>
          <main className="card-container">
            {renderBarbershops}
          </main>
        </>
      )
}

export default Home;