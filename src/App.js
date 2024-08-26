import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div className="App">
      <h1>Appointment Scheduler</h1>
      <AppointmentForm onAddAppointment={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>

    
  );
}

export default App;

