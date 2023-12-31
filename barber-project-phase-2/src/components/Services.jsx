import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import Cart from "./Cart";
import Calendar from 'react-calendar';
import { Outlet, useOutletContext } from "react-router-dom";
import Times from "./Time";

function Services() {

const [barbershopServices, setBarbershopServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');
const [date, setDate] = useState(new Date());
const [time, setTime] = useState(false);
const [event, setEvent] = useState("");
const [dollarSign, setDollarSign] = useState(false)
const [at, setAt] =useState(false)

const {search, setIsSearch, setIsApp, setIsServices} = useOutletContext();

const selectedDate = date.toDateString();

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
        setDollarSign(true)
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
                    <Calendar onChange={setDate} value={date}  />
                <div className="time-container">
                  <Times setAt={setAt} event={event} setEvent={setEvent} time={time} date={date} setTime={setTime}/>
                </div>
                </div>
          </div>
          <div className="cart">
            <ul>
              <Cart setPrice={setPrice} at={at} dollarSign={dollarSign} setDollarSign={setDollarSign} service={service} price={price} barberShop={barberShop} barber={barber} selectedDate={selectedDate} time={event}/>
            </ul>
          </div>
        </div>
      );
}

export default Services

