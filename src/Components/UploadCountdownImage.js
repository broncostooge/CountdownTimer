import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Content/CSS/index.css'
import firebase from '../Firebase/'

const storageService = firebase.storage();
const storageRef = storageService.ref();
let selectedFile;

class UploadCountdownImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.location.state.name || "...",
    };
  }

  componentDidMount(){
    document.querySelector('.file-select').addEventListener('change', this.handleFileUploadChange);
    document.querySelector('.file-submit').addEventListener('click', this.handleFileUploadSubmit);
  }

  handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
  }

  handleFileUploadSubmit(e) {
    const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    }, (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    }, () => {
       // Do something once upload is complete
       console.log('success');
    });
  }

  render() {
  
    var storageRef = firebase.storage().ref();

    return (
      <div className="Container">
        <h1>Upload An Image For Your Countdown to {this.state.name}</h1>
        <div id="filesubmit">
          <input type="file" className="file-select" accept="image/*"/>
          <button className="file-submit">SUBMIT</button>
        </div>
        <Link to={{ pathname: '/CountdownView', state: {name: this.state.name}}}>To Countdown View</Link>
      </div>
    );
  }
}

export default UploadCountdownImage;
