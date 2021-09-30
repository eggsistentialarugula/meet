import React from "react";
import { ErrorAlert } from './Alert'

class NumberOfEvents extends React.Component {
    state = {
        numberOfEvents: 32,
        infoText: '',
    };

    updateCount = (eventCount) => {
        if (eventCount < 1 || eventCount > 32) {
            return this.setState({
                numberOfEvents: 0,
                infoText: 'Please select a number between 1 - 32'
            });
        } else {
            this.setState({
                numberOfEvents: eventCount,
                infoText: ''
            });
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
                    value={this.props.numberOfEvents}
                    onChange={(e) => this.updateCount(e.target.value)}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;