// import React from 'react';
// import Event from '../Event';
// import { shallow } from 'enzyme';

// describe('<Event /> component', () => {
//     const event = {
//         "kind": "calendar#event",
//         "etag": "\"3181161784712000\"",
//         "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
//         "status": "confirmed",
//         "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
//         "created": "2020-05-19T19:17:46.000Z",
//         "updated": "2020-05-27T12:01:32.356Z",
//         "summary": "Learn JavaScript",
//         "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
//         "location": "London, UK",
//         "creator": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//         },
//         "organizer": {
//             "email": "fullstackwebdev@careerfoundry.com",
//             "self": true
//         },
//         "start": {
//             "dateTime": "2020-05-19T16:00:00+02:00",
//             "timeZone": "Europe/Berlin"
//         },
//         "end": {
//             "dateTime": "2020-05-19T17:00:00+02:00",
//             "timeZone": "Europe/Berlin"
//         },
//         "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
//         "originalStartTime": {
//             "dateTime": "2020-05-19T16:00:00+02:00",
//             "timeZone": "Europe/Berlin"
//         },
//         "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
//         "sequence": 0,
//         "reminders": {
//             "useDefault": true
//         },
//     };

//     let EventWrapper;
//     beforeAll(() => {
//         EventWrapper = shallow(<Event event={event} />);
//     });

//     test('render Event component', () => {
//         expect(EventWrapper).toHaveLength(1);
//     });

//     test('render event container', () => {
//         expect(EventWrapper.find('.event-container')).toHaveLength(1);
//     });

//     test('render basic event information', () => {
//         expect(EventWrapper.find('.event-overview')).toHaveLength(1);
//     });

//     test('render the event details div', () => {
//         EventWrapper.setState({ showDetails: true });
//         expect(EventWrapper.find('.event-details')).toHaveLength(1);
//     });

//     test('render event details', () => {
//         expect(EventWrapper.find('.event-details').children()).toHaveLength(2);
//     });

//     test('render toggle details button', () => {
//         expect(EventWrapper.find('.toggle-button')).toHaveLength(1);
//     });

//     test('when button says show details then clicking on it will show event details', () => {
//         EventWrapper.setState({ showDetails: false });
//         EventWrapper.find('.toggle-button').simulate('click');
//         expect(EventWrapper.state('showDetails')).toBe(true);
//     });

//     test('when button says hide details then clicking on it will hide details', () => {
//         EventWrapper.setState({ showDetails: true }); //hide details button will be under the details
//         EventWrapper.find('.toggle-button').simulate('click');
//         expect(EventWrapper.state('showDetails')).toBe(false);
//     });
// });

import { shallow } from 'enzyme';
import React from 'react';
import Event from '../Event';


describe('<Event /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test('render toggle button', () => {
        expect(EventWrapper.find('.displayMore')).toHaveLength(1);
    });

    test('render correct state for show/hide button', () => {
        EventWrapper.setState({
            showText: true
        });
        EventWrapper.find('.displayMore').at(0).simulate('click');
        expect(EventWrapper.state("showText")).toBe(true);
    })