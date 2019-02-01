import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'
import kitten from '../Content/Images/kitten.jpg'
class UploadCountdownImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.location.state.name || "...",
      backgroundurl: 'url(C:/Users/Stephan.Jones/Desktop/Stephan Jones - Neudesic Documents/Personal Projects/CountdownTimer/src/Content/Images/kitten.jpg)'
    };
  }

  render() {
    return (
      <div style={ { backgroundImage: "url("+kitten+")" } } className="Container">
        <h1>Upload An Image For Your Countdown to {this.state.name}</h1>
        <Link to={{ pathname: '/CountdownView', state: {name: this.state.name}}}>To Countdown View</Link>
      </div>
    );
  }
}

export default UploadCountdownImage;
