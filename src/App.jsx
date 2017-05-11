import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  // State -- Add/Set
  constructor(props) {
    super(props);
    // state is always an object, such as a string, number, or another object
    this.state = {
      deadline: 'December 15, 2017',
      newDeadline: ''
    }
  }

  // State -- Update
  changeDeadline() {
    // Set deadline, to newDeadline within the State (see below <input>)
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock />
        <div>
          <input 
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
