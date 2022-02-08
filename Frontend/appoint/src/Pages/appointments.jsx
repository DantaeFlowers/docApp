import React, { Component } from 'react'
import axios from 'axios'
// const URL = `http://localhost:3001/doctors`

class CreateAppointment extends Component {
   constructor(props) {
      super(props)
      this.state = {
         doctor: [],
         doctor_value:"",
         patient_name: "",
      }
   }


   getAlldoctors = async () => {
      let url = `http://localhost:3001/doctors`;
      try {
         let res = await axios.get(url)
         console.log ('doctors', res.data)
         let doctors = res.data
            this.setState({
            doctor: doctors.payload
          })

            }catch (err) {
               console.log  (err)
         }
   }

   handleTextChange = (e) => {
      console.log('value', e.target.value)
      this.setState({
         patient_name:(e.target.value)
      })
   }

   handleDoctorChange = (e) => {
      console.log("value", e.target.value)
      this.setState({
          doctor_value: e.target.value
      })
  }


   appointmentSubmit =  async (e) => {
      e.preventDefault()
      let {doctor, patient_name} = this.state
      let url = `http://localhost:3001/appointments/newAppointment`
      let appointmentObj = {
         doctor_id: doctor.payload,
         patient: patient_name
      }
      try {
         await axios.post (url, appointmentObj)
      } catch (err) {
         console.log (err)
         }
      }

      componentDidMount () {
         this.getAlldoctors()
      }
render() {
   let { doctor } = this.state 

return (
   <div>
      <h1>Create Appointment</h1>
      <div>
         <form onSubmit={this.appointmentSubmit}>
            <input
               type='text'
               placeholder='Your name'
               required
               onChange={this.handleTextChange}
               value={this.state.patient_name}
               style={{ width: 180 }}></input><br></br>
      <br></br>
            <select defaultValue='doctor' onChange={this.handleChange} style={{ width: 180 }}>
               <option value='doctor' disabled>doctor</option>
               {doctor.map((el) => {
                  return <option key={el.id} value={el.id}>{el.id}</option>
               })}
            </select><br></br>
            <input type='submit' />
         </form>
      </div>
      </div>

)
}

   
}

export default CreateAppointment;