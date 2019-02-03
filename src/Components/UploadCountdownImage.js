import React, { Component } from 'react';
import firebase from '../Firebase/'

const storageService = firebase.storage();
const storageRef = storageService.ref();
let selectedFile;

class UploadCountdownImage extends Component {
  constructor(props){
    super(props)
    this.state = {
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
       this.props.onImgNameSelected(this.state.imgName)
    });
  }

  render() {


    return (
      <div>
        <h2>Upload An Image For Your Countdown</h2>
        <div id="filesubmit">
          <input type="file" className="file-select" accept="image/*"/>
          <button className="file-submit">Submit and View Countdown</button>
        </div>
      </div>
    );
  }
}

export default UploadCountdownImage;
