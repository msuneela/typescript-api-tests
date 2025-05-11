Feature: Schedule channel API Tests

  Scenario: Verify that the API has status 200 and completes within 1000ms
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then the response status should be 200
    And the response time should be less than 1000ms

  Scenario: Verify that all schedule items have a non-empty ID and type is "episode"
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then every schedule item should have a non-empty id
    And every schedule item should have type "episode" in "episode"

  Scenario: Verify that all episode titles are non-empty
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then every schedule item should have a non-empty episode title
    
  Scenario: Verify that Only one episode is marked as live
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then only one schedule item should have live set to true

  Scenario: Verify that transmission start is before transmission end
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then transmissionStart should be before transmissionEnd for all items

  Scenario: Verify that API response header contains a Date
    Given I send a GET request to "/api/RMSTest/ibltest"
    Then the response header should contain a Date header

  Scenario: Verify that submitting invalid date returns 404 and error structure
    Given I send a GET request to "/api/RMSTest/ibltest/2023-09-11"
    Then the response status should be 404
    And the response body should contain "details" and "http_response_code"
