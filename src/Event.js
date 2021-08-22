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
                    <h1 className="event-title">{event.summary}</h1>
                    <h2 className="event-location">{event.location}</h2>
                    <h3 className="event-time">From {event.start.dateTime} to {event.end.dateTime}</h3>
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
                        <p className="event-description">{event.description}</p>
                        <p className="creator-email">{event.creator.email}</p>
                    </div>
                )}
            </div>
        );
    }
}
export default Event;