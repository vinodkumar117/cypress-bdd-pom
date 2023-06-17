Feature: Login Feature

    Feature Description login feature

    @Login @UI @smoke
    Scenario: Validate admin user is able to login successfully
    Given open the application in browser
    And user enters the username and password
    When user clicks on Login button
    Then user should be logged in successfully

    @Login @UI
    Scenario Outline: Validate error is thrown when username or password is wrong
    Given open the application in browser
    And user enters username "<username>" and password "<password>"
    When user clicks on Login button
    Then validate error message "Invalid credentials" is displayed
    Examples:
            | username | password |
            | Admin    | admin16 |
            | Admin    |   @@    |
            |    @@    | admin16 |

