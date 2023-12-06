import React from 'react'


function Cart( {service, price, barberShop, barber} ) {
    return (
        <div className="services-item">
            <div className="">
                <h1>Your Order</h1>
                <p>{barberShop}</p>
                <p>{barber}</p>
                <p>{service}</p>
                <p>{price}</p>
                <button>Reserve</button>
            </div>
        </div>
    )
}

export default Cart