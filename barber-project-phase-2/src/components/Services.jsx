import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import Cart from "./Cart";

function Services() {

const [barbershopServices, setBarbershopServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');

    const { id } = useParams();

    console.log(id)
    const location = useLocation();

    const barberShop = location.state.clickedBarberShop;
    const barber = location.state.clickedBarber
    

    useEffect(() => {
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
    // console.log('hi');
    // console.log(service);
    // console.log('bye')
    // console.log(price);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:4000/barbershops/${id}`);
    //             const data = await response.json();
    //             setServices(data);
    //             console.log('Data from API:', data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [id]);

    // const serviceElements = for(service in services.service) 
    //     return(

    //     )
    // }
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
          <div className="cart">
            <ul>
              <Cart service={service} price={price} barberShop={barberShop} barber={barber}/>
            </ul>
          </div>
        </div>
      );
    
    // return (
    //     <div className="services-container">
    //         <p>Select a Service:</p>
    //         {Object.entries(barbershopServices.services).map(([serviceName, price]) => (
    //             <ServicesCard handleChange={handleChange} key={serviceName} serviceName={serviceName} price={price} />
    //             ))}
    //         <ul>
    //             <Cart service={service} price={price} barberShop={barberShop} barber={barber}/>
    //         </ul>

    //     </div>
    // )
}

export default Services