import React, { useState } from 'react'
import axios from 'axios';
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import About from './Pages/about'
import Doctors from './Pages/doctors'
import Home from './Pages/home'
import CreateAppointments from './Pages/appointments';


function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/doctors'element={<Doctors/>} />
        <Route path='/appointments'element={<CreateAppointments/>} />
      </Routes>
      </Router>
      <DatePicker
        selected={selectedDate}
        onChange={date =>setSelectedDate(date)}
      />
    </div>

  );
}

export default App;
