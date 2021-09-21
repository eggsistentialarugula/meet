import React, { Component } from 'react';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        }
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(44,179,225)';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

class NetworkAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#61ffca';
    }
}

export { InfoAlert, ErrorAlert, NetworkAlert }