import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'; //imported from app.js which is one folder up
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
    let AppWrapper;
    //code in beforeAll functions will be executed before all of the tests in your test suite
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    })
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1); //ensures that there exists only one EventList component with the App component
    });
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents component', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    })
});