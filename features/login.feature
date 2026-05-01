Feature: Login feature

    @smoke 
    Scenario: User signs in with valid credentials

        Given the user is on the login page
        When the user enters a valid email and password
        Then the "My Account" page should be visible