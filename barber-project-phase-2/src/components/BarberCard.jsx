import { useNavigate } from "react-router-dom";
import React from "react";

function BarberCard({barber, index}) {

    const navigate = useNavigate();

    return (
        <article className="barber-card" onClick={() => navigate(`/barbershop/${index}/services`)}>
            <p>{barber.name}</p>
            <img src={barber.image}/>
        </article>
    )
}

export default BarberCard