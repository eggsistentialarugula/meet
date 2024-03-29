import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch'
import { extractLocations } from '../api';

import { loadFeature, defineFeature } from 'jest-cucumber'; //built-in functions from jest-cucumber - loadFeature() is used to load a Gherkin file and defineFeature() is used to define the code for that file

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn’t searched for any city', () => {

        });
        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see a list of all upcoming events from all locations', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-container').hostNodes()).toHaveLength(mockData.length);
        });
    });

    test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
        let CitySearchWrapper;
        let locations = extractLocations(mockData);
        given('the main page is open', () => {
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => { }} locations={locations} />);
        });

        when('user starts typing in the city textbok', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        then('the user should see a list of cities (suggestions) that match what they have typed', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
        });
    });


    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        let AppWrapper;
        given('user was typing "Berlin" in the city textbox', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        and('the list of suggested cities is showing', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });

        when('the user selects a city (e.g., "Berlin, Germany") from the list', () => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('their city should be changed to that city (i.e., "Berlin, Germany")', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city', () => {
            expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
        });
    });
});
