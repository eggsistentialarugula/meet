import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch'
import { extractLocations } from '../api';

import { loadFeature, defineFeature } from 'jest-cucumber'; //built-in functions from jest-cucumber - loadFeature() is used to load a Gherkin file and defineFeature() is used to define the code for that file

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    test('An event element is collapsed by default', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user has the loaded app open', () => {
            AppWrapper = mount(<App />);
        });

        and('the list of events has been loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
        });

        when('user did not click show details button', () => { });

        then('event elements will be collapsed', () => {
            expect(AppWrapper.find('showDetails')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user has the loaded app open', () => {
            AppWrapper = mount(<App />);
        });

        and('the list of events had been loaded', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
        });

        when('user clicks show details button for an event', () => {
            AppWrapper.find('.toggle-button').at(0).simulate('click');

        });

        then('the element should expand with event details that the user can see', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user has the loaded app open', () => {
            AppWrapper = mount(<App />);
        });

        and('the event element is expanded', () => {
            AppWrapper.update();
            AppWrapper.find('.toggle-button').at(0).simulate('click');
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });

        when('user clicks hide details button', () => {
            AppWrapper.find('.toggle-button').at(0).simulate('click');
        });

        then('the event element should collapse and the user should not be able to see the event details anymore', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
})