import React from "react";
import { ErrorAlert } from './Alert'

class NumberOfEvents extends React.Component {
    state = {
        numberOfEvents: 32,
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });
        if (value < 1 || value > 32) {
            this.setState({
                infoText: 'Please enter a number between 1 and 32',
            });
        } else {
            this.setState({
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