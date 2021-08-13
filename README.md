# meet app

# About

A serverless, progress web application built with React using test-drive development technique. This application uses the Google Calendar API to fetch upcoming events.

# Key Features

* Filter events by city
* Show/hide event details
* Specify number of events
* Use the app when offline
* Add an app shortcut to the home screen
* View a chart showing the number of upcoming events by city

## FEATURE 1: FILTER EVENTS BY CITY
***
### AS A USER, I SHOULD BE ABLE TO FILTER EVENTS BY CITY SO I CAN SEE A LIST OF EVENTS THAT ARE TAKING PLACE IN THAT CITY

* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

* Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbook
Then the user should see a list of cities (suggestions) that match what they’ve typed

* Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city would be changed to that city and the user should receive a list of upcoming events in that city.

## FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
***
### AS A USER, I SHOULD BE ABLE TO SHOW AND HIDE DETAILS OF ANY EVENT SO THAT I CAN SEE MORE OR LESS INFO ABOUT AN EVENT

* Scenario 1: An event element is collapsed by default.
Given the user has the app open
When a user tries to find details about an event
Then the event elements should show but the details are not showing

* Scenario 2: User can expand an event to see its details.
Given the user has the app open
When a user selects an event
Then an element should expand with event details that the user can see

* Scenario 3: User can collapse an event to hide its details.
Given user is looking at an expanded event(s)
When a user clicks on the expanded event that is showing its details
Then the event details should collapse and the user should not be able to see the event details anymore

## FEATURE 3: SPECIFY NUMBER OF EVENTS
***
### AS A USER, I WOULD LIKE TO HAVE THE OPTION TO SPECIFY THE NUMBER OF EVENTS I WANT TO VIEW IN THE APP SO I CAN EITHER VIEW MORE OR LESS EVENTS.

* Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given a user has opened the app
When a user looks for events in that city
Then by default the number of events shown is 32 

* Scenario 2: User can change the number of events they want to see.
Given the user has opened the app
When the user sees the events display on the screen
Then they should be able to specifically choose how many events they want to see

## FEATURE 4: USE THE APP WHEN OFFLINE
***
### AS A USER I WOULD LIKE TO BE ABLE TO USE THE APP WHEN OFFLINE SO THAT I CAN SEE THE EVENTS I VIEWED THE LAST TIME I WAS ONLINE

* Scenario 1: Show cached data when there’s no internet connection.
Given the user has no internet connection
When the user wants to look at the events
Then the user should be able to see the events they last viewed while they were online

* Scenario 2: Show error when user changes the settings (city, time range).
Given the user has no internet connection
When the user changes the settings
Then the user shouldn’t be able to see the events and an error message will display

## FEATURE 5: DATA VISUALIZATION
***
### AS A USER I WOULD LIKE TO BE ABLE TO SEE A CHART SHOWING THE UPCOMING EVENTS IN EACH CITY SO THAT I KNOW WHAT EVENTS ARE ORGANIZED IN WHICH CITY

* Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user has the app open and is looking for events in general
When the user clicks on the chart(s)
Then the user will see a chart showing upcoming events in each city
