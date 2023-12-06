function ServicesCard( {serviceName, price, service, setPrice, setService, handleChange} ) {

  // function handleATC(e) {
  //   setService(serviceName)
  //   setPrice(price)
  //   console.log(service)
  //   console.log('hi')
  //   console.log(price)
  // }



  function renderClick() {
  
    // handleChange();
    handleChange(serviceName, price)
  }
  
    return (
          <li className="services-item" onClick={renderClick} key={serviceName}>
              {`${serviceName}: $${price}`}
          </li>
      );
}



export default ServicesCard