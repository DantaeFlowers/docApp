import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../App.css'

class Doctors extends React.Component {
  constructor() {
    super()

    this.state = {
      doctors: []
    }
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get('http://localhost:3001/doctors/')
      this.setState({
        doctors: data.payload
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    let { doctors } = this.state 
    let doctorsArr= [];
    for(let i in doctors) {
        let link = `/profile/${doctors[i].doc_name}`
        doctorsArr.push(
            <div >   
                <Link to={link}>{doctors[i].doc_name}</Link>
                
            </div>)            
    }
    return(doctorsArr)
}
}

export default Doctors;