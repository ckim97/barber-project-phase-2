import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import Cart from "./Cart";
import Calendar from 'react-calendar';
import { Outlet, useOutletContext } from "react-router-dom";

function Services() {

const [barbershopServices, setBarbershopServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');
const [date, setDate] = useState(new Date());

const {search, setIsSearch, setIsApp, setIsServices} = useOutletContext();

    const { id } = useParams();

    console.log(id)
    const location = useLocation();

    const barberShop = location.state.clickedBarberShop;
    const barber = location.state.clickedBarber
    

    useEffect(() => {
      setIsApp(false)
      setIsServices(true)
      setIsSearch(false)
        fetch(`http://localhost:4000/barbershops/${id}`)
          .then((res) => res.json())
          .then((data) => setBarbershopServices(data));
      }, []);

  
    function handleChange(name, price1) {
        const serviceName = name;
        const servicePrice = price1
        setService(serviceName);
        setPrice(servicePrice);
    }
    
    console.log('no')
    console.log(barbershopServices.services)
    console.group('yes')
    
      return (
        <div className="services-container">
          <div className="services-list">
            <p>Select a Service:</p>
            {Object.entries(barbershopServices.services).map(([serviceName, price]) => (
              <ServicesCard handleChange={handleChange} key={serviceName} serviceName={serviceName} price={price} />
            ))}
          </div>
          <div>
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date}/>
            </div>
          </div>
          <div className="cart">
            <ul>
              <Cart service={service} price={price} barberShop={barberShop} barber={barber}/>
            </ul>
          </div>
        </div>
      );
}

export default Services

