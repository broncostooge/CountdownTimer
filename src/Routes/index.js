import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//Components
import CountdownView from '../Components/CountdownView'
import NameCountdown from '../Components/NameCountdown'
import UploadCountdownImage from '../Components/UploadCountdownImage'
import HomePage from '../Components/HomePage'
import TimeCountdown from '../Components/TimeCountdown'

export default class Routes extends Component {

    render(){

        return(
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/CountdownView' component={CountdownView}/>
                <Route exact path='/NameCountdown' component={NameCountdown}/>
                <Route exact path='/TimeCountdown' component={TimeCountdown}/>
                <Route exact path='/UploadCountdownImage' component={UploadCountdownImage}/>
            </Switch>
        )
    }
}