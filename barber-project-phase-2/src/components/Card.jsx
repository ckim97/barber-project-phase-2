import React from 'react'

function Card({barbershop, navigate}) {
    
    return (
      <article  className="item" onClick={() => navigate(`/barbershop/${barbershop.id}/barbers`)}>
          <h2>{barbershop.name}</h2>
          <h3>Rating: {barbershop.rating}</h3>
          <img src={barbershop.image}/>
      </article>
    )
  }
  
  export default Card