import React from "react";
import { ErrorAlert } from './Alert'

class NumberOfEvents extends React.Component {
    state = {
        numberOfEvents: 32,
        infoText: '',
    };

    handleInputChange = (eventCount) => {
        if (eventCount < 1 || eventCount > 32) {
            return this.setState({
                infoText: 'Please enter a number between 1 and 32',
            });
        } else {
            this.setState({
                numberOfEvents: eventCount,
                infoText: ''
            })
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
                    onChange={this.handleInputChange}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;