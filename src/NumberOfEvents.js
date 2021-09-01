import React from "react";

class NumberOfEvents extends React.Component {
    state = {
        numberOfEvents: 32,
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfEvents: value,
        });
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
            </div>
        );
    }
}

export default NumberOfEvents;