import React from "react";

class NumberOfEvents extends React.Component {
    state = {
        eventStateNum: 32,
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            eventStateNum: value,
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
                    className="eventStateNum"
                    value={this.state.eventStateNum}
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default NumberOfEvents;