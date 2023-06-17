Feature: Home Page Test

    Feature Home Page Test

    @HomePage @UI
    Scenario: Validate home page left menu options link text
    Given open the application in browser
    And user enters the username and password
    When user clicks on Login button
    Then user should be logged in successfully
    Then Validate home page left menu option text