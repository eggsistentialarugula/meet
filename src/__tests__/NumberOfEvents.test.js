// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render number of events div', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    // "Number of Events""
    test('render number of events label', () => {
        expect(NumberOfEventsWrapper.find('.numEvents-label')).toHaveLength(1);
    });

    // check that element to select number of events exists
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
    });

    // verfies if number of events is valid
    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.event-number-input').prop('value')).toBe(numberOfEvents);
    });

    // change state when user selects number
    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents: '32',
        });
        const eventObject = { target: { value: '20' } };
        NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('20');
    });
});