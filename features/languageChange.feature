Feature: LanguageChange feature

    @smoke
    Scenario: User changes site language successfully

        Given the user is on the homepage
        And the language switcher is visible
        When the user selects "de" from the language dropdown
        Then the site interface should be displayed in "de"