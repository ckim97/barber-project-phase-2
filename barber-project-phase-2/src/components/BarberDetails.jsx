import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BarberCard from "./BarberCard";
import { useOutletContext } from "react-router-dom";

function BarberDetails() {

    // const location = useLocation();
    const { id } = useParams();

    const location = useLocation();

    const [barbers, setBarbers] = useState([]);

    const [clickedBarber, setClickedBarber] = useState('');

    const barberShop = location.state.bbshop;

    const {search, setIsSearch, setIsApp, setIsServices} = useOutletContext();

    // console.log(barbers)
    useEffect(() => {
        setIsSearch(false)
        setIsApp(false)
        setIsServices(false)
        fetch(`http://localhost:4000/barbershop/${id}/barbers`)
          .then((res) => res.json())
          .then((data) => setBarbers(data));
      }, []);
    //   console.log(data);


    return (
        <div >
        <p style={{ textAlign: 'center' }}>Choose a Professional</p>
        <main className="card-container">
            {barbers.map((barber => (
                <BarberCard key={barber.id} barber={barber} index={barber.barbershopId} barberShop={barberShop} />
            )))}         
          </main>
        </div>

    )


}

export default BarberDetails