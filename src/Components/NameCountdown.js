import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'

class NameCountdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "..."
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if(e.target.value.length > 0){
      this.setState({name: e.target.value});
      this.props.onNameSelected(e.target.value);
    }
    else{
      this.setState({name: "..."})
      this.props.onNameSelected("...");
    }
  }

  render() {
    return (
      <div>
        <h1>What are you Counting Down To?</h1>
        <input onChange={this.handleChange} id="input_name_for_countodown" type="text" placeholder="Countdown Name"></input>
      </div>
    );
  }
}

export default NameCountdown;
