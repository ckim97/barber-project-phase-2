import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Profile() {

    const [user, setUser] = useState({})
    const [appointment, setAppointment] = useState({})

    const {search, setIsSearch} = useOutletContext();

    useEffect(() => {
        setIsSearch(false)
        fetch("http://localhost:4000/users/1")
          .then((res) => res.json())
          .then((data) => setUser(data));
      }, []);
      useEffect(() => {
        fetch("http://localhost:4000/appointments/1")
          .then((res) => res.json())
          .then((data) => setAppointment(data));
      }, []);

      return (
        <div className="profile-container">
          <div className="profile-item">
            <h1>Welcome</h1>
            <h1>{user.name}</h1>
          </div>
          <div className="profile-item">
            <p>You have an appointment at</p>
            <p>{appointment.data}</p>
            <p>{appointment.time}</p>
          </div>
        </div>
      )
}

export default Profile;