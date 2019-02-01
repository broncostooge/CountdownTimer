import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'

class CountdownView extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.location.state.name || "..."
    }
  }
  render() {
    return (
      <div className="Container">
        <h1>Counting Down To {this.state.name}</h1>
        <Link to={'/'}>To HomePage</Link>
      </div>
    );
  }
}

export default CountdownView;
