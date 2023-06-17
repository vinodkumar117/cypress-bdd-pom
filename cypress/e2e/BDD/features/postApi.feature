  
  Feature: Rest API POST call

  @PostAPI @API
  Scenario: Validate user is able to create new user using POST API

    Given User set key "name" value to "vinod"
    And User set key "job" value to "leader"
    When User make a POST call
    Then Response code should be "201"
    Then Response body should have a key "key" with a value "job"
    Then Response body should have a key "value" with a value "leader"
    Then Response body should have a key "value" with a value "leader"
    Then Response body should have a key "id"
    Then Response body should have a key "createdAt"
    Then Validate create user response schema

    
