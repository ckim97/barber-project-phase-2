import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function BarberCard({barber, index, key, barberShop}) {

    const navigate = useNavigate();
    const [clickedBarber, setClickedBarber] = useState('');

    console.log('teehee')
    console.log(barberShop);
    console.log()

    function handleClick() {
        const currentBarber = barber.name;
        setClickedBarber(currentBarber);
        navigate(`/barbershop/${index}/services`,{state: {clickedBarberShop: barberShop, clickedBarber: currentBarber}} )}
        return (
            <article className="card-item" onClick={() => { 
                handleClick();
              }}>
                <p>{barber.name}</p>
                <img src={barber.image} alt={barber.name}/>
            </article>
        )
    }



export default BarberCard