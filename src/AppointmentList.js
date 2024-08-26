import React from 'react';

function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>{appointment.firstName} {appointment.lastName}</strong><br />
            Email: {appointment.email}<br />
            Phone: {appointment.phone}<br />
            Date: {appointment.date.toLocaleDateString()}<br />
            Time: {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
