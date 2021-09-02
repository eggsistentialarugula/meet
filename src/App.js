import React, { Component } from 'react';
import './App.css';
import "./nprogress.css";

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, numFilter } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    eventsLocFilt: [],
    numFilteredList: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents()
      .then((events) => {
        if (this.mounted) {
          this.setState({
            events: events,
            numFilteredList: events.slice(0, 32),
            locations: extractLocations(events)
          });
        }
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    const locationEvents = (location === 'all') ?
      this.state.events :
      this.state.events.filter((event) => event.location === location);
    this.setState({
      eventsLocFilt: locationEvents,
      numFilteredList: numFilter(locationEvents, this.state.numberOfEvents)
    });
  }

  updateEventNum = (num) => {
    if (this.state.eventsLocFilt.length !== 0) {
      this.setState({
        numberOfEvents: num,
        numFilteredList: numFilter(this.state.eventsLocFilt, num)
      });
    } else {
      this.setState({
        numberOfEvents: num,
        numFilteredList: numFilter(this.state.events, num)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEventNum={this.updateEventNum} />
        <EventList events={this.state.numFilteredList} />
      </div>
    );
  }
}

export default App;