import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AppointmentDetails from "./AppointmentDetails";


function Profile() {

    const [user, setUser] = useState({})
    const [appointment, setAppointment] = useState({})

    const {search, setIsSearch, setIsApp, setIsServices} = useOutletContext();

    const [cart, setCart] = useState([])

    const [isThereAppointment, setIsThereAppointment] = useState(false)


    useEffect(() => {
        setIsSearch(false)
        setIsApp(false)
        setIsServices(false)
        fetch("http://localhost:4000/users/1")
          .then((res) => res.json())
          .then((data) => setUser(data));
      }, []);
      // useEffect(() => {
      //   fetch("http://localhost:4000/appointments/1")
      //     .then((res) => res.json())
      //     .then((data) => 
      //     setCart(data);
      //     setIsThereAppointment(data.state));
      // }, []);
      useEffect(() => {
        fetch("http://localhost:4000/appointments/1")
          .then((res) => res.json())
          .then((data) => {
            setCart(data);
            setIsThereAppointment(data.state);
          })
          .catch((error) => {
            console.error("Error fetching appointment data:", error);
          });
      }, []);

      console.log('hi')
      console.log(isThereAppointment);


      // const shopValue = cart.length > 0 ? cart[0].shop : null;

      // console.log(shopValue);
      // const shop = cart.shop
      // console.log(cart.shop);

      return (
        <div className="profile-container">
          <div className="profile-item">
            <h1>Welcome</h1>
            <h1>{user.name}</h1>
          </div>
          {isThereAppointment ? <AppointmentDetails cart={cart} setIsThereAppointment={setIsThereAppointment}/> : (<p>You have no appointments</p>)}
        </div>
      )
    }
    
    export default Profile;
    {/* <div className="profile-item">
      <p>You have an appointment at</p>
      <p>{cart.shop}</p>
      <p>on</p>
      <p>{cart.date} at {cart.time}</p>
      <p>with</p>
      <p>{cart.barber}</p>
    </div>
    <div class="cancel">
      <button>Cancel Appointment</button>
    </div> */}