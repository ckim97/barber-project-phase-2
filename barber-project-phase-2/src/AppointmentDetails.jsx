function AppointmentDetails({ cart, setIsThereAppointment }) {

    function handleClick() {
        setIsThereAppointment(false);

        fetch("http://localhost:4000/appointments/1", {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
    })
    }

    return (
      <div className="profile-item">
        <p>You have an appointment at</p>
        <p>{cart.shop}</p>
        <p>on</p>
        <p>{cart.date} at {cart.time}</p>
        <p>with</p>
        <p>{cart.barber}</p>
        <div className="cancel">
          <button class="reserve" onClick={handleClick}>Cancel Appointment</button>
        </div>
      </div>
    );
  }

  export default AppointmentDetails