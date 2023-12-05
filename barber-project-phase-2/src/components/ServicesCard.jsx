function ServicesCard( {service} ) {
    return (
      <li key={serviceName}>
        {`${serviceName}: $${price}`}
      </li>
    )
}

export default ServicesCard