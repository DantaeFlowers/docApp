import React from 'react'
import axios from 'axios'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import '../App.css'

class Appointments extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
      appointments: []
   }
 }

 async componentDidMount() {
    let response = await axios.get(`http://localhost:3001/appointments/all`)
    this.setState({  
      appointments:  response.data.payload
    })
 }

 render(){
    const { appointments } = this.state

        return (
            <div className="App">
                <h1>Upcoming appointments</h1>
                <div className="showList">
                  <ul> {
                     this.state.appointments.map((appointment,i) => {
                        return( 
                           <li className="showCard" key={i}>
                              <p>Patient Name: {appointment.patient} 
                              <br></br>
                              Doctor: {appointment.doctor_id}
                              </p>
                           </li>
                        )
                     })
                  }
                  </ul>
                </div>
            </div>
          );

 }
}

export default Appointments;