import React,{useState} from 'react'


function Cart( {at, service, price, barberShop, barber, selectedDate, time, dollarSign, setDollarSign} ) {


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
        <div className="cart-items">
                <h1 class="your-order">Your Order</h1>
                <div class="top-cart">
                    <p>{barberShop}</p>
                    <p>{barber}</p>
                    <p>{selectedDate}</p>
                    {at ?<p>at {time}</p> : null}
                    <p>{service}</p>
                </div>
                <div class="bottom-cart">
                    <h2>Subtotal: {dollarSign ? <>
                    ${price} 
                    </> : null}</h2>                    
                </div>
                <button class="reserve" onClick={handleClick}>Reserve & Pay</button>
                
                
                
         </div>

    )
}

export default Cart