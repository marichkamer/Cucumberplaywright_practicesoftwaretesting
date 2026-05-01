Feature: Checkout feature

  @regression
  Scenario: Logged-in user completes a purchase

    Given the user is on the homepage
    And the user is logged in
    When the user adds "Pliers" to the basket
    And the user proceeds to checkout
    And the user enters valid shipping and payment details
    Then the order should be successfully placed