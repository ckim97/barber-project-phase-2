import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BarberCard from "./BarberCard";

function BarberDetails() {
    const { id } = useParams();

    const { state } = useLocation();

    const [barbers, setBarbers] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:4000/barbershop/${id}/barbers`)
          .then((res) => res.json())
          .then((data) => setBarbers(data));
      }, []);
    //   console.log(data);

    console.log(barbers);

    return (
        <div>
        <p>Choose a Professional</p>
        <main className="container">
            {barbers.map((barber => (
                <BarberCard barber={barber}/>
            )))}         
          </main>
        </div>

    )


}

export default BarberDetails