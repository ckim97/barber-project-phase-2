import React from 'react'


function Cart( {service, price, barberShop, barber, selectedDate, time} ) {

    function handleClick() {
        fetch("http://localhost:4000/appointments", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                shop: barberShop,
                barber: barber,
                date: selectedDate,
                service: service,
                time: time,
                state: true
            })
    })
    }

    return (
        <div className="services-item">
            <div className="">
                <h1>Your Order</h1>
                <p>{barberShop}</p>
                <p>{barber}</p>
                <p>{selectedDate}</p>
                <p>{time}</p>
                <p>{service}</p>
                <p>{price}</p>
                <button onClick={handleClick}>Reserve</button>
            </div>
        </div>
    )
}

export default Cart