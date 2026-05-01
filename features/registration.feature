Feature: Registration feature

    @regression
    Scenario: User signs up with valid data

        Given the user is on the login page
        And the "Sign in" button is visible
        When the user registers with valid data
        Then the account should be created successfully