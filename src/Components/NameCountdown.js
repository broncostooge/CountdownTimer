import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'

class NameCountdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "..."
    };
  }

  handleChange(e){
    if(e.target.value.length > 0){
      this.setState({name: e.target.value});
    }
    else{
      this.setState({name: "..."})
    }
  }

  render() {
    return (
      <div className="Container">
        <h1>What are you Counting Down To?</h1>
        <h2> Counting down to {this.state.name}</h2>
        <input onChange={this.handleChange.bind(this)} id="input_name_for_countodown" type="text" placeholder="Countdown Name"></input>
        <Link to={{ pathname: '/UploadCountdownImage', state: {name: this.state.name}}}>To Upload Countdown Image</Link>
      </div>
    );
  }
}

export default NameCountdown;
