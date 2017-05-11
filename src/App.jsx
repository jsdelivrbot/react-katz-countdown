import React, { Component } from 'react';

class App extends Component {
  // State -- Add/Set
  constructor(props) {
    super(props);
    // state is always an object, such as a string, number, or another object
    this.state = {
      deadline: 'December 15, 2017'
    }
  }

  // State -- Update
  changeDeadline() {
    // use React's setState method, to pass an entirely new object with a 
    // key value pair that we would like to update
    this.setState({deadline: 'November 25, 2017'})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
