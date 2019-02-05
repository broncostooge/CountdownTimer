import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class TimeCountdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: new Date()
    }
    
    this.handleChange = this.handleChange.bind(this);

  }

  onChange = value => this.setState({ value })

  handleChange(){
      let time = this.state.value.toDateString();
    if(time.length > 0){
        this.props.onTimeSelected(time)
    }
    else{
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className="Left-Container">
        <h2>When Does {this.props.name} Start?</h2>
        <div className="form-group">
          <DatePicker onChange={this.onChange} value={value} />
          <button className="btn btn-primary" onClick={this.handleChange} type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default TimeCountdown;
