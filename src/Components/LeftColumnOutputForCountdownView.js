import React, { Component } from 'react';

class LeftColumnOutputForCountdownView extends Component {
    constructor(props){
        super(props)

        this.returnToHomePage = this.returnToHomePage.bind(this);
    }
    
    returnToHomePage(){
        this.props.onReturnToHomePage();
    }

    render(){
        return(
            <div className="Left-Container">
                <h2>Enjoy Your Countdown.</h2>
                <button className="btn btn-primary" type="submit" onClick={this.returnToHomePage}>Create Another Countdown</button>
            </div>
        )
    }
}

export default LeftColumnOutputForCountdownView;