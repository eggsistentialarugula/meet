// src/__tests__/App.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

// unit testing
describe('<App /> component', () => {
    let AppWrapper;
    //code in beforeAll functions will be executed before all of the tests in your test suite
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    // show list of events
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1); //ensures that there exists only one EventList component with the App component
    });

    // search city
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents component', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

// integration testing
describe('<App /> integration', () => {
    //make sure that EventList gets events as a prop from App
    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    //make sure that CitySearch gets locations as a prop from App
    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    // filter list of events that match the city the user selected
    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    // show all events when selected 'see all cities'
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    // numberOfEvents are passed as props
    test('App passes "numberOfEvents" as a prop to NumberOfEvents', () => {
        const AppWrapper = mount(<App />);
        const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
        expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppNumberOfEventsState);
        AppWrapper.unmount();
    });

    // update number of events displayed
    test('update list of events after user changes/updates number', () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        AppWrapper.instance().updateEvents = jest.fn();
        AppWrapper.instance().forceUpdate();
        NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
        const eventObject = { target: { value: 1 } };
        NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
        AppWrapper.unmount();
    });
});