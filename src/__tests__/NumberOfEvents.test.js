import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test("render text input", () => {
        expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
    });

    // verify number of events is correct range of 1 - 32
    test("make sure text input is valid", () => {
        const eventsNum = NumberOfEventsWrapper.state('eventStateNum');
        expect(NumberOfEventsWrapper.find('.eventStateNum').prop('value')).toBe(eventsNum);
    });

    test('change state when text input changes', () => {
        const eventsNum = { target: { value: '20' } };
        NumberOfEventsWrapper.find('.eventStateNum').simulate('change', eventsNum);
        expect(NumberOfEventsWrapper.state('eventStateNum')).toBe('20');
    });
});