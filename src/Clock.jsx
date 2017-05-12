import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    /* PROPS: Deadline: can use because was passed from parent App.jsx via props
     * in the JSX for Clock via <Clock via deadline={this.state.deadline} /> */
    // New variable getTimeUntil by grabbing <input> entered date from 'deadline'
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    // After mounted, run this...
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  // not "mounting" but added to this code anyway...
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) %24);
    const days = Math.floor(time/(1000*60*60*24));

    // Update State
    this.setState({days: days, seconds: seconds, minutes: minutes, hours: hours});
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
