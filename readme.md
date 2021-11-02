# meet app

[Link to the project](https://eggsistentialarugula.github.io/meet/)

### Quick Access

[Overview](#overview) <br/>
[Description](#description) <br/>
[Features](#features) <br/>
[Tech](#tech) <br/>
[Dependencies](#dependencies) <br/>

<h3 id = "overview">Overview</h3>

A serverless, progressive web application (PWA) built with **React** using a **test-drive development (TDD) technique**. The application uses the **Google Calendar API** to fetch upcoming CareerFoundry events.

<h3 id = "description">Description</h3>

**Serverless** and **PWAs** have grown in popularity recently and are both considered to be the future of web development. When combining these two concepts, your app will not only work as a normal web app, but it will also reap the the benefits of both serverless architecture and PWAs.

* **Serverless**: No backend maintenance, easy to scale, always avaialble, no cost for idle time.
* **PWAs**: Instant loading, offline support, push notifications, "add to home scree" prompt, responsive design, and cross-platform compatibility.

For this app, I used a TDD approach, which forced me to write tests before writing the actual functionality of the app in code. TDD relies on the repetition of a very short development cycle, allowing me to get immediate feedback.

I have also added some graphs to my Meet app, which will help users draw conclusions more easily from the data.

<h3 id = "features">Key Features</h3>

* [Filter events by city](#featureOne)
* [Show/hide event details](#featureTwo)
* [Specify number of events](#featureThree)
* [Use the app when offline](#featureFour)
* Add an app shortcut to the home screen
* [View a chart showing the number of upcoming events by city](#featureFive)
***
<h3 id = "featureOne">FEATURE 1: FILTER EVENTS BY CITY</h3>
<h4> AS A USER, I SHOULD BE ABLE TO FILTER EVENTS BY CITY SO I CAN SEE A LIST OF EVENTS THAT ARE TAKING PLACE IN THAT CITY</h4>

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
* Given user hasn’t searched for any city
* When the user opens the app 
* Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
* Given the main page is open
* When user starts typing in the city textbox
* Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.
* Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
* When the user selects a city (e.g., “Berlin, Germany”) from the list
* Then their city would be changed to that city and the user should receive a list of upcoming events in that city. The list of suggestions should disappear.
***
<h3 id = "featureTwo">FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS</h3>
<h4>AS A USER, I SHOULD BE ABLE TO SHOW AND HIDE DETAILS OF ANY EVENT SO THAT I CAN SEE MORE OR LESS INFO ABOUT AN EVENT</h4>

Scenario 1: An event element is collapsed by default.
* Given the user has the app open
* When a user tries to find details about an event
* Then the event elements should show but the details are not showing

Scenario 2: User can expand an event to see its details.
* Given the user has the app open
* When a user selects an event
* Then an element should expand with event details that the user can see

Scenario 3: User can collapse an event to hide its details.
* Given user is looking at an expanded event(s)
* When a user clicks on the expanded event that is showing its details
* Then the event details should collapse and the user should not be able to see the event details anymore
***
<h3 id =  "featureThree">FEATURE 3: SPECIFY NUMBER OF EVENTS</h3>
<h4>AS A USER, I WOULD LIKE TO HAVE THE OPTION TO SPECIFY THE NUMBER OF EVENTS I WANT TO VIEW IN THE APP SO I CAN EITHER VIEW MORE OR LESS EVENTS.</h4>

Scenario 1: When user hasn’t specified a number, 32 is the default number.
* Given a user has opened the app
* When a user looks for events in that city
* Then by default the number of events shown is 32 

Scenario 2: User can change the number of events they want to see.
* Given the user has opened the app
* When the user sees the events display on the screen
* Then they should be able to specifically choose how many events they want to see
***
<h3 id = "featureFour">FEATURE 4: USE THE APP WHEN OFFLINE</h3>
<h4> AS A USER I WOULD LIKE TO BE ABLE TO USE THE APP WHEN OFFLINE SO THAT I CAN SEE THE EVENTS I VIEWED THE LAST TIME I WAS ONLINE</h4>

Scenario 1: Show cached data when there’s no internet connection.
* Given the user has no internet connection
* When the user wants to look at the events
* Then the user should be able to see the events they last viewed while they were online

Scenario 2: Show error when user changes the settings (city, time range).
* Given the user has no internet connection
* When the user changes the settings
* Then the user shouldn’t be able to see the events and an error message will display
***
<h3 id = "featureFive">FEATURE 5: DATA VISUALIZATION</h3>
<h4>AS A USER I WOULD LIKE TO BE ABLE TO SEE A CHART SHOWING THE UPCOMING EVENTS IN EACH CITY SO THAT I KNOW WHAT EVENTS ARE ORGANIZED IN WHICH CITY</h4>

Scenario 1: Show a chart with the number of upcoming events in each city.
* Given the user has the app open and is looking for events in general
* When the user clicks on the chart(s)
* Then the user will see a chart showing upcoming events in each city

<h3 id = "tech">Tech</h3>

* React application.
* Built with the TDD Technique.
* Uses the Meetup API and OAuth2 authentication flow.
* Uses serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
* Responsive Design
* Passes Lighthouse's PWA checklist
* App works offline and in slow network conditions with the help of a server worker.
* Users are able to install the app on desktop and add the app to their home screen on mobile.
* API call uses React axious and async/await.
* Implements an alert system using an OOP approach to show info to the user.
* Includes data visualization
* App is covered by tests with a coverate rate >= 90%
* App is monitored using an online app performance monitoring (APM) tool called Atatus.

<h3 id = "dependencies">Dependencies and DevDependencies</h3>

* @testing-library/react@11.2.7
* @testing-library/jest-dom@5.14.1
* @testing-library/user-event@12.8.3
* atatus-spa@4.3.2
* axios@0.21.1
* nprogress@0.2.0
* react@17.0.2
* react-dom@17.0.2
* react-scripts@4.0.3
* recharts@2.1.4
* web-vitals@0.2.4
* workbox-background-sync@5.1.4
* workbox-broadcast-update@5.1.4
* workbox-cacheable-response@5.1.4
* workbox-core@5.1.4
* workbox-expiration@5.1.4
* workbox-google-analytics@5.1.4
* workbox-navigation-preload@5.1.4
* workbox-precaching@5.1.4
* workbox-range-requests@5.1.4
* workbox-routing@5.1.4
* workbox-strategies@5.1.4
* workbox-streams@5.1.4
* 

* @wojtekmaj/enzyme-adapter-react-17@0.6.3
* enzyme@3.11.0
* gh-pages@3.2.3
* jest-cucumber@3.0.1
* prop-types@15.7.2
* puppeteer@10.2.0
