function ServicesCard( {barbershopService} ) {
    return (
      <li >
        {`${barbershopService.name}: $${barbershopService.price}`}
      </li>
    )
}

export default ServicesCard