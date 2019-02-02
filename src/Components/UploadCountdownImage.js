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
      imgName: "",
    };

    this.handleFileUploadChange = this.handleFileUploadChange.bind(this);
    this.handleFileUploadSubmit = this.handleFileUploadSubmit.bind(this);

  }

  componentDidMount(){
    document.querySelector('.file-select').addEventListener('change', this.handleFileUploadChange);
    document.querySelector('.file-submit').addEventListener('click', this.handleFileUploadSubmit);
  }

  handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
    this.setState({name: this.state.name, imgName: selectedFile.name})
  }

  handleFileUploadSubmit(e) {
     //create a child directory called images, and place the file inside this directory
    const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile);

    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    }, (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    }, () => {
       // Do something once upload is complete
       console.log('success');
       document.getElementById("ImageContainer").style.backgroundImage = "url(" + "https://firebasestorage.googleapis.com/v0/b/moodcalendar-6676d.appspot.com/o/images%2F"+this.state.imgName+"?alt=media&token=6010d1f9-cea8-4f42-a370-8415d56348bc" + ")";
    });
  }

  render() {

    const style ={
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }

    return (
      <div style ={style} id="ImageContainer" className="Container">
        <h1>Upload An Image For Your Countdown to {this.state.name}</h1>
        <div id="filesubmit">
          <input type="file" className="file-select" accept="image/*"/>
          <button className="file-submit">SUBMIT</button>
        </div>
        <Link 
        to={{ 
          pathname: '/CountdownView', 
          state: {
            name: this.state.name, 
            imgURL: "https://firebasestorage.googleapis.com/v0/b/moodcalendar-6676d.appspot.com/o/images%2F"+this.state.imgName+"?alt=media&token=6010d1f9-cea8-4f42-a370-8415d56348bc"
          }
        }}>To Countdown View</Link>
      </div>
    );
  }
}

export default UploadCountdownImage;
