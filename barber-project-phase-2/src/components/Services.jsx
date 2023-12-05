import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";

function Services() {

    const [services, setServices] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/barbershops/${id}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);


    return (
        <div>
            <p>Select a Service:</p>
            {services.map((service => (
                <ServicesCard service={service.services}/>
            )))}
        </div>
    )
}

export default Services