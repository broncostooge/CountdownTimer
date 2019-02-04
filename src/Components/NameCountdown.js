import React, { Component } from 'react';

class NameCountdown extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
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
        <div className="Left-Container">
          <h2>What are you Counting Down To?</h2>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Countdown" id="input_name_for_countdown"/>
            <button className="btn btn-primary" onClick={this.handleClick} type="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NameCountdown;
