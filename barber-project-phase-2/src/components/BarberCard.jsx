import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> origin/main

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
            <article onClick={() => { 
                handleClick();
              }}>
                <p>{barber.name}</p>
            </article>
        )
    }


<<<<<<< HEAD
=======
    return (
        <article className="barber-card" onClick={() => navigate(`/barbershop/${index}/services`)}>
            <p>{barber.name}</p>
            <img src={barber.image}/>
        </article>
    )
}
>>>>>>> origin/main

export default BarberCard