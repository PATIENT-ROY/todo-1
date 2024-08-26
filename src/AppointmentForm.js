import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';  
import './TimePicker.css'; 

function AppointmentForm({ onAddAppointment }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('10:00');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !time) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

     
    const formattedDate = format(date, 'dd-MM-yyyy');

    const appointment = {
      firstName,
      lastName,
      email,
      phone,
      date: formattedDate,  
      time,
    };

    onAddAppointment(appointment);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setDate(new Date());
    setTime('10:00');
    setError('');
    alert('Запись успешно добавлена!');
  };

   
  const validateInput = (input) => {
    const regex = /^[A-Za-zА-Яа-яЁё]+$/;   
    return regex.test(input);
  };

   
  const handleFirstNameChange = (e) => {
    if (validateInput(e.target.value) || e.target.value === '') {
      setFirstName(e.target.value);
    }
  };

  const handleLastNameChange = (e) => {
    if (validateInput(e.target.value) || e.target.value === '') {
      setLastName(e.target.value);
    }
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    if (selectedTime >= "10:00" && selectedTime <= "22:00") {
      setTime(selectedTime);
    } else {
      setError('Выберите время в диапазоне с 10:00 до 22:00');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Имя:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </div>
      <div>
        <label>Фамилия:</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Телефон:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Дата:</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} required />
      </div>
      <div>
        <label>Время:</label>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          min="10:00"   
          max="22:00"  
          required
        />
      </div>
      <button type="submit">Записаться</button>
    </form>
  );
}

export default AppointmentForm;
