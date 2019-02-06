import React, { Component } from 'react';
import '../Content/CSS/index.css'
import NameCountdown from './NameCountdown';
import TimeCountdown from './TimeCountdown';
import UploadCountdownImage from './UploadCountdownImage';
import LeftColumnOutputForCountdownView from './LeftColumnOutputForCountdownView'

class HomePage extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: "...",
      countdown_stage: "Name",
      endTime: "...",
      intervalId: null,
      time: null,
      timeTo: {
          days: "",
          hours: "",
          minutes: "",
          seconds: ""
      },
      imgName: ""
    }

    this.setTimeTo = this.setTimeTo.bind(this);
  }

  componentDidMount() {
    if(this.state.intervalId){
      var intervalId = setInterval(() => {this.setTimeTo(this.state.endTime)}, 1000);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
    }
 }

 componentWillUnmount() {
  if(this.state.intervalId){
    clearInterval(this.interval);
  }
}

setTimeTo(time){
    let endDate = new Date(time).getTime()
    let now = new Date().getTime();
    let delta = endDate - now;
    this.setState({
      time: time,
      timeTo: {
        days: Math.floor(delta / (1000 * 60 * 60 * 24)),
        hours: Math.floor((delta % (1000* 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((delta % (1000 * 60)) / 1000)
      }
    })
 }

  handleName = (nameValue) => {
    this.setState({name: nameValue, countdown_stage: "Time"});
  }

  handleTime = (time) => {
    this.setState({endTime: time, countdown_stage: "UploadImage"});
  }

  handleImgName = (imgNameValue) => {
    this.setState({imgName: imgNameValue, countdown_stage: "CountdownView"});

    var intervalId = setInterval(() => {this.setTimeTo(this.state.endTime)}, 1000);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
    
  }

  handleReturnToHomePage = () => {
    this.setState({name: "...", countdown_stage: "Name", endTime: "...", intervalId: null, time: null, timeTo:{days: "", hours: "", minutes: "", seconds: ""}, imgName: ""})
  }

  render() {

    let leftColumnOutput;
    let style;
    let countdownOutput;

    if(this.state.countdown_stage === "Name"){
      leftColumnOutput = <NameCountdown onNameSelected={this.handleName}/>;
      style = {};
     }else if(this.state.countdown_stage === "Time" ){
      leftColumnOutput = <TimeCountdown name={this.state.name} onTimeSelected={this.handleTime}/>;
      style = {};
     }else if(this.state.countdown_stage === "UploadImage"){
      leftColumnOutput = <UploadCountdownImage onImgNameSelected={this.handleImgName} />;
      style = {};
     }else if(this.state.countdown_stage === "CountdownView"){
      leftColumnOutput = <LeftColumnOutputForCountdownView onReturnToHomePage={this.handleReturnToHomePage} />;
      style = {
        backgroundImage: "https://firebasestorage.googleapis.com/v0/b/moodcalendar-6676d.appspot.com/o/images%2F"+this.state.imgName+"?alt=media&token=6010d1f9-cea8-4f42-a370-8415d56348bc",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
      countdownOutput = "Days: " + this.state.timeTo.days + " Hours: " + this.state.timeTo.hours + " Minutes: " + this.state.timeTo.minutes + " Seconds: " + this.state.timeTo.seconds;
     }

    return (
      <div className="Container">
        <div className="LeftInnerContainer">
          {leftColumnOutput}
        </div>
        <div className="RightInnerContainer">
          <div>
            <h2>Counting Down To {this.state.name}</h2>
          </div>
          <div>
            <h2>{this.state.name} Starts on {this.state.endTime}</h2>
          </div>
          <div>
            <span>{countdownOutput}</span>
          </div>
          <div>
            <img src={style.backgroundImage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
