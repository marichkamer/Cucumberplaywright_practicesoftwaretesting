Feature: ProductSearch feature

    @smoke
    Scenario: User searches for an exact product name

        Given the user is on the homepage
        When the user searches for "Sledgehammer"
        Then the search results should contain "Sledgehammer"