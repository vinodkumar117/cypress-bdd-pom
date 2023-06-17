Feature: Rest API GET call

  @GetAPI @API @smoke
  Scenario: Validate user is able to get users list using GET API

    Given User set queryParameter "page" to "2"
    Given User make "GET" call
    Then Response code should be "200"
    Then Response body should contain a key "total_pages" with a value "2"
    Then Validate get user response schema
    


