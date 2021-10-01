import React, { Component } from "react";
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: '',
    };

    handleInputChange = (eventCount) => {
        const eventNum = eventCount.target.value;
        if (eventNum <= 0 || eventNum > 32) {
            return this.setState({
                infoText: 'Please enter a number between 1 and 32',
                numberOfEvents: ''
            })
        }
        else {
            this.setState({
                numberOfEvents: eventNum,
                errorText: '',
            })
            // this.props.updateEventCount(eventCount.target.value);
        }
    };

    render() {
        return (
            <div className="numberOfEvents">
                <label className="numEvents-label">
                    Number of Events <br></br>
                </label>
                <input
                    type="number"
                    className="event-number-input"
                    value={this.state.numberOfEvents}
                    onChange={e => this.handleInputChange(e)}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;