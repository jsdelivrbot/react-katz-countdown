import React, { Component } from 'react';
// Connect component to STORE: 1 of 
// { connect } function works by hooking up two functions to react component,
// 1) it first connects a "maps states to props" function and a
// 2) "maps dispatch to props" function 
import { connect } from 'react-redux';
// addReminder
import { addReminder } from '../actions';

class App extends Component {
  // Add State: 1 of 3 -- Add state to component
  constructor(props) {
    super(props);
    this.state =  {
      text: '' 
    }
  }
  
  // Add Reminder 2
  addReminder() {
    this.props.addReminder(this.state.text);
  }

  // Render Component
  // Render Reminders 1
  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
  {/* Add State: 2 of 3 -- see below onChange  */}
  {/* Add State: 3 of 3 -- see below onClick  */}
  {/* Render Reminders 2 --- see below this.renderReminders  */}
  return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value}) }
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        { this.renderReminders() }
      </div>
    )
  }
}

// Connect component to STORE:
// Map State to Props 1
function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// Connect component to STORE: 2 of (call connect function from redux) 
// Map Dispatch to Props, and Bind Action: { addReminder } 
// Map State to Props 2 
export default connect(mapStateToProps, { addReminder })(App);

