Feature: Add and Search Employee Feature

    Feature Add and Search Employee

    Background: User is Logged In
    Given open the application in browser
    And user enters the username and password
    When user clicks on Login button
    Then user should be logged in successfully

    @UI @Regression @AddEmployee
    Scenario: Validate user is able to new employee
    Given user clicks on PIM
    And user clicks on Add button
    And user adds a new employee
    Then employee should be added successfully

    @UI @Regression @SearchEmployee
    Scenario: Validate user is able to search employee with name on PIM UI
    And user clicks on PIM
    And user enters employee name in search
    Then user clicks on search button
    And user should be able to search employee with name
