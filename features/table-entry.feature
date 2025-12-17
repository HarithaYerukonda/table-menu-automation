Feature: Table number entry

  Scenario: User enters a valid table number and is taken to the main menu
    Given the user is on the table number entry page
    When the user enters a valid table number
    And the user clicks the Continue button
    Then the user should be on the main menu page
