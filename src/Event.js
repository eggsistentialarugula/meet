import React, { Component } from "react";

class Event extends Component {
    state = {
        showDetails: false,
    };

    toggleVisibility = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    };

    render() {
        const showDetails = this.state.showDetails;
        const { event } = this.props;

        return (
            <div className="event-container">
                <div className="event-overview">
                    <span className="event-title">{event.summary}</span>
                    <br></br>
                    <span className="event-location">{event.location}</span>
                    <br></br>
                    <span className="event-time">From {event.start.dateTime} to {event.end.dateTime}</span>
                    <br></br>
                    {!showDetails && (
                        <button className="toggle-button" onClick={this.toggleVisibility}>
                            Show Details
                        </button>
                    )}
                    {showDetails && (
                        <button className="toggle-button" onClick={this.toggleVisibility}>
                            Hide Details
                        </button>
                    )}
                </div>

                {showDetails && (
                    <div className="event-details">
                        <span className="event-description">{event.description}</span>
                        <br></br>
                        <span className="creator-email">{event.creator.email}</span>
                    </div>
                )}
            </div>
        );
    }
}
export default Event;