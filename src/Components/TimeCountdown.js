import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'

class TimeCountdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      endTime: null,
      intervalId: null,
      timeTo: {
          days: "",
          hours: "",
          minutes: "",
          seconds: ""
      }
    }
    
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(){
      let time = document.getElementById("input_time_for_countodown").value;

    if(time.length > 0){
        this.props.onTimeSelected(time)
    }
    else{
    }
  }

  render() {

    return (
      <div>
        <h1>When are we Countding down To?</h1>
        <input id="input_time_for_countodown" type="text" placeholder="Countdown Time"></input>
        <button onClick={this.handleChange} type="submit">Submit</button>
      </div>
    );
  }
}

export default TimeCountdown;
