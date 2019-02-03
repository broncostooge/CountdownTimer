import React, { Component } from 'react';
import '../Content/CSS/index.css'

class NameCountdown extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    const inputValue = document.getElementById("input_name_for_countdown").value;
    if(inputValue.length > 0){
      this.props.onNameSelected(inputValue);
    }
    else{
      this.props.onNameSelected("...");
    }
  }

  render() {
    return (
      <div>
        <h2>What are you Counting Down To?</h2>
        <input id="input_name_for_countdown" type="text" placeholder="Countdown Name"></input>
        <button onClick={this.handleChange} type="submit">Submit</button>
      </div>
    );
  }
}

export default NameCountdown;
