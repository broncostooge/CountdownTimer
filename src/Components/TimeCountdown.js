import React, { Component } from 'react';
import '../Content/CSS/index.css'

class TimeCountdown extends Component {
  constructor(props){
    super(props)
    
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
        <h2>When are we Countding down To?</h2>
        <input id="input_time_for_countodown" type="text" placeholder="Countdown Time"></input>
        <button onClick={this.handleChange} type="submit">Submit</button>
      </div>
    );
  }
}

export default TimeCountdown;
