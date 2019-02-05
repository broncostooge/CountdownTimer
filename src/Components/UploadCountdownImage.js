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
      imgLocation: null,
      ImageURI: null
    };

    this.handleFileUploadChange = this.handleFileUploadChange.bind(this);
    this.handleFileUploadSubmit = this.handleFileUploadSubmit.bind(this);

  }

  componentDidMount(){
    document.querySelector('.file-select').addEventListener('change', this.handleFileUploadChange);
    document.querySelector('.file-submit').addEventListener('click', this.handleFileUploadSubmit);
  }

  handleFileUploadChange(e) {

    let ImagePreview = document.getElementById("ImagePreview")
    selectedFile = e.target.files[0];

    ImagePreview.className += "show";

    document.getElementById("imageName").value = selectedFile.name;

    this.setState({name: this.state.name, imgName: selectedFile.name, ImageURI: URL.createObjectURL(selectedFile)})
    
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
      <div className="Left-Container">
        <h2>Upload An Image For Your Countdown</h2>
        <div className="input-group" id="img_upload_input">
          <label className="input-group-btn">
              <span className="btn btn-primary">
                  Browse&hellip; <input type="file" className="file-select" accept="image/*"/>
              </span>
          </label>
          <input type="text" className="form-control" id="imageName" readOnly/>
        </div>
        <div id="ImagePreview">
          <h3>Image Preview</h3>
          <img alt="preview_image" src={this.state.ImageURI}></img>
          <button className="btn btn-primary file-submit">Submit and View Countdown</button>
        </div>
      </div>
    );
  }
}

export default UploadCountdownImage;
