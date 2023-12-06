import React, { useState } from 'react';
import Calendar from 'react-calendar';

const time = ['08:00 AM', '09:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'];

function Times({event, setEvent, setTime}) {

  function setTimes(times) {
    setEvent(times);
    setTime(true);
  }

  return (
    <div className="times">
      {time.map((times, index) => (
        <div key={index}>
          <button onClick={() => setTimes(times)}>{times}</button>
        </div>
      ))}
    </div>
  );
}

export default Times;