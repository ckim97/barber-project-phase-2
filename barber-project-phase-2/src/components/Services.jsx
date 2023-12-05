import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";

function Services() {

const [barbershopServices, setBarbershopServices] = useState({ services: {} })
const [service, setService] = useState('');
const [price, setPrice] = useState('');

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:4000/barbershops/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setBarbershopServices(data)
        });
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


    console.log(barbershopServices)
      console.log('hi')
    // const serviceElements = for(service in services.service) {
    //     return(

    //     )
    // }
    return (
        <div>
            <p>Select a Service:</p>

            <ul>
                {/* {Object.entries(barbershopServices.services).map((barbershopService) => <ServicesCard key={barbershopService.id barbershopService={barbershopService}} />)} */}
            </ul>

        </div>
    )
}

export default Services