import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import Cart from "./Cart";

function Services() {

const [services, setServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');

    const { id } = useParams();
    const location = useLocation();

    const barberShop = location.state.clickedBarberShop;
    const barber = location.state.clickedBarber
    

    useEffect(() => {
        fetch(`http://localhost:4000/barbershops/${id}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, [id]);

      useEffect(() => {
        console.log("Updated Service:", service);
        console.log("Updated Price:", price);
        
    }, [services, service, price]);
    
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
    return (
        <div>
            <p>Select a Service:</p>
            {/* {services.map((service => (
                <ServicesCard service={services}/>
            )))} */}
            {/* {serviceElements} */}

            {/* <ServicesCard /> */}
            <ul>
                        {Object.entries(services.services).map(([serviceName, price2]) => (
                            <ServicesCard serviceName={serviceName} price={price2} handleChange={handleChange}/>
                        ))}
                        <Cart service={service} price={price} barberShop={barberShop} barber={barber}/>
            </ul>

        </div>
    )
}

export default Services