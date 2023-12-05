import React from 'react'
import { useState,useEffect } from 'react';
import BarberDetails from './BarberDetails';


function Card({barbershop, navigate}) {

  const [clickedBarberShop, setClickedBarberShop] = useState('');

  function handleClick() {
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
      <article className="item" onClick={() => { 
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