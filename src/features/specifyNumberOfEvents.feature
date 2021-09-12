
Feature: Specify Number of events

    Scenario: When user hasn’t specified a number, 32 is the default number
        Given the user did not specify a number of events
        When app is loaded and user is looking for events in that city
        Then by default the number of events shown is 32

    Scenario: User can change the number of events they want to see
        Given app is loaded and user has the app open
        And the list of events has been loaded
        When the user specifies a number of events
        Then the app should load a maximum of the specified number of events