import React, { Component } from 'react';
import ShowTimer from './ShowTimer';

class ClockPage extends Component {

    constructor() {
        super();
        this.state = {
            timer: "--:--"
        }
        console.log("Clock page: Constructor");
    }

    componentDidMount() {
        console.log("ClockPage did mount");
        this.start();
    }

    componentDidUpdate() {
        console.log("ClockPage did update");
        document.title = this.state.timer;
    }

    start = () => {
        this.timerInterval = setInterval(() => {
            console.log("Start set timer")
            this.setState({ timer: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentWillUnmount(){
        console.log("Component - will unmount");
        clearInterval(this.timerInterval);
    }

    render() {
        console.log("ClockPage - render");
        return (
            <div>
                <h3>Clock Page</h3>
                <ShowTimer timer={this.state.timer}/>
            </div>
        );
    }
}

ClockPage.propTypes = {};

export default ClockPage;