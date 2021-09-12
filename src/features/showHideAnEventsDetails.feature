Feature: Show/hide an event's details

    Scenario: An event element is collapsed by default
        Given the user has the loaded app open
        And the list of events has been loaded
        When user did not click show details button
        Then event elements will be collapsed

    Scenario: User can expand an event to see its details
        Given the user has the loaded app open
        And the list of events had been loaded
        When user clicks show details button for an event
        Then the element should expand with event details that the user can see

    Scenario: User can collapse an event to hide its details
        Given the user has the loaded app open
        And the event element is expanded
        When user clicks hide details button
        Then the event element should collapse and the user should not be able to see the event details anymore