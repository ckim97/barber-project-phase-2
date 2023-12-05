function Cart( {service, price, barberShop, barber} ) {
    return (
        <div>
            <h1>Your Order</h1>
            <p>{barberShop}</p>
            <p>{barber}</p>
            <p>{service}</p>
            <p>{price}</p>
            <button>Reserve</button>
        </div>
    )
}

export default Cart