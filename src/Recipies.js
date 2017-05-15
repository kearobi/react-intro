import React, {Component} from 'react';
import './App.css';

class Appointments extends Component {
  constructor (props) {
    super(props)
      this.state = {
        appointments: [
          {name: '30 min Browning'},
          {name: '1 hr max'}
        ]
      }
    }

render() {
  let appointments = this.state.appointments.map(function(appointment){
    return(
      <li key={appointment.name}>{appointment.name}</li>
    )
  })
  return (
    <ul>
      {appointments}
    </ul>
    );
  }
}

export default Appointments;
