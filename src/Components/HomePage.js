import React, { Component } from 'react';
import '../Content/CSS/index.css'
import NameCountdown from './NameCountdown';
import TimeCountdown from './TimeCountdown';
import UploadCountdownImage from './UploadCountdownImage';

class HomePage extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: "...",
      countdown_stage: "Name",
      endTime: null,
      intervalId: null,
      time: null,
      timeTo: {
          days: "",
          hours: "",
          minutes: "",
          seconds: ""
      },
      imgName: "",
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentDidMount() {
    if(this.state.intervalId){
      var intervalId = setInterval(() => {this.setTimeTo(this.state.time)}, 1000);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
    }
 }

 componentWillUnmount() {
  clearInterval(this.interval);
}

  handleName = (nameValue) => {
    this.setState({name: nameValue, countdown_stage: "Time"});
  }

  handleTime = (time) => {
    if(time.length > 0){
      let endDate_two = new Date(time).getTime()
        let now = new Date().getTime();
        let delta = endDate_two - now;
        this.setState({
          time: time,
          timeTo: {
          days: Math.floor(delta / (1000 * 60 * 60 * 24)),
          hours: Math.floor((delta % (1000* 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((delta % (1000 * 60)) / 1000)
          }
        })
      setInterval(() => {this.setTimeTo(time)}, 1000);
    }
  }

  handleImgName = (imgNameValue) => {
  }

 setTimeTo(time){
    let endDate_two = new Date(time).getTime()
    let now = new Date().getTime();
    let delta = endDate_two - now;
    this.setState({
      countdown_stage: "UploadImage",
      time: time,
      timeTo: {
      days: Math.floor(delta / (1000 * 60 * 60 * 24)),
      hours: Math.floor((delta % (1000* 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((delta % (1000 * 60)) / 1000)
      }
    })
 }

  render() {

    let output;
    let leftColumnOutput;

    if(this.state.countdown_stage === "Time" && this.state.intervalId){
        const days = this.state.timeTo.days;
        const hours = this.state.timeTo.hours;
        const minutes = this.state.timeTo.minutes;
        const seconds = this.state.timeTo.seconds;

        output = "Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
    }
    else{
        output = "";
    }


    if(this.state.countdown_stage === "Name"){
      leftColumnOutput = <NameCountdown onNameSelected={this.handleName}/>;
     }else if(this.state.countdown_stage === "Time" ){
      leftColumnOutput = <TimeCountdown onTimeSelected={this.handleTime}/>;
     }else if(this.state.countdown_stage === "UploadImage"){
      leftColumnOutput = <UploadCountdownImage mounted={this.setTimeTo} />;
    }

    return (
      <div>
        <div>
          {leftColumnOutput}
        </div>
        <div>
          <div>
            <h2> Counting down to {this.state.name}</h2>
          </div>
          <div>
          <h2>Time Left: {output}</h2>
          </div>
          <div>

          </div>
        </div>
      </div>
      /*
      <div className="Container">
            <h1>Countdown Timer</h1>
            <p>
                <Link to={'/NameCountdown'}>To Name Countdown</Link>
            </p>
      </div>*/
    );
  }
}

export default HomePage;
