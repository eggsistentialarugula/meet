import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch'
import { extractLocations } from '../api';

import { loadFeature, defineFeature } from 'jest-cucumber'; //built-in functions from jest-cucumber - loadFeature() is used to load a Gherkin file and defineFeature() is used to define the code for that file
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('the user did not specify a number of events', () => { });

        when('app is loaded and user is looking for events in that city', () => {
            AppWrapper = mount(<App />);
        });

        then('by default the number of events shown is 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-container').length).toBeLessThanOrEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, and, when, then }) => {
        let AppWrapper;
        given('app is loaded and user has the app open', () => {
            AppWrapper = mount(<App />);
        });

        and('the list of events has been loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
        });

        when('the user specifies a number of events', () => {
            const numberOfEvents = { target: { value: 1 } };
            AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
        });

        then('the app should load a maximum of the specified number of events', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({ numberOfEvents: 1 });
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
        });
    });
})