import React from 'react'
import { useState, useEffect } from 'react';
import BarberDetails from './BarberDetails';
import { Outlet, useOutletContext } from "react-router-dom";


function Card({barbershop, navigate}) {

  const [clickedBarberShop, setClickedBarberShop] = useState('');

  const {search, setIsSearch} = useOutletContext();

  function handleClick() {
    setIsSearch(false);
    const currentName = barbershop.name;
    // console.log(currentName)
    setClickedBarberShop(currentName);
    navigate(`/barbershop/${barbershop.id}/barbers`, { state: {bbshop: currentName } });
  }
  console.log('jes')
  console.log(clickedBarberShop);
  console.log('res')
    return (
      // <article  className="item" onClick={() => navigate(`/barbershop/${barbershop.id}/barbers`,{clickedBarberShop}) }>
      <article className="card-item" onClick={() => { 
        handleClick();
      }}>
      {/* // setClickedBarberShop(barbershop.name);
      // {navigate(`/barbershop/${barbershop.id}/barbers`); }}> */}
          <h2>{barbershop.name}</h2>
          <h3>Rating: {barbershop.rating}</h3>
          <img src={barbershop.image}/>
      </article>
    )
  }
  
  export default Card