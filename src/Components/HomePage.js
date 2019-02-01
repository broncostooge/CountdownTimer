import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'

class HomePage extends Component {
  render() {
    return (
      <div className="Container">
            <h1>Countdown Timer</h1>
            <p>
                <Link to={'/NameCountdown'}>To Name Countdown</Link>
            </p>
      </div>
    );
  }
}

export default HomePage;
