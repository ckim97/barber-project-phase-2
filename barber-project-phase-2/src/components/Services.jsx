import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";

function Services() {

const [services, setServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:4000/barbershops/${id}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
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


    console.log(services)
      console.log('hi')
    // const serviceElements = for(service in services.service) {
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
                {Object.entries(services.services).map(([serviceName, price]) => (
                    <li key={serviceName}>
                    {`${serviceName}: $${price}`}
                    </li>

            ))}
            </ul>

        </div>
    )
}

export default Services