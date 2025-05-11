Manual Test Documentation: Schedule channel API Verification

Feature: Schedule channel API Manual Tests
@manual

Scenario: Verify successful API response status
    Given I send a GET request to "/api/RMSTest/ibltest"         **PASS**
    When I check status code for the response                      **PASS**
    Then the response status should be 200                         **PASS**
    Result: Response status code appears as expected. Passed

Scenario: Verify API response contains correct fields
    Given I send a GET request to "/api/RMSTest/ibltest"          **PASS**
    Then I should see correct fields as per business logic        **PASS**
    Result: All expected fields (Schedule, Channel, elements etc.) are present and readable

Scenario: Verify API date formatting
    Given I send a GET request to "/api/RMSTest/ibltest"          **PASS**
    Then see correct date format for 'scheduled_start' and 'scheduled_end'     **PASS**
    Result: Dates appear in ISO 8601 format, e.g., '2023-09-11T05:00:00.000Z' for all scheduled_start and scheduled_end fields

Scenario: Verify 404 response for invalid date parameter
    Given I send a GET request to "/api/RMSTest/ibltest/2023-09-11"  **PASS**
    Then I should see 404 as status                                  **PASS**
    And I should see error detail as "Schedule not found for date (2023-09-11)"  **PASS**
    Result: Correct status code and error message returned

Scenario: Verify 404 response for invalid endpoint
    Given I send a GET request to "/api/RMSTest/ibltest1"         **PASS**
    Then I should see 404 as status                               **PASS**
    And I should see message as "Endpoint not found"              **PASS**
    Result: Correct status code and error message returned

Summary: All manual test scenarios for the Schedule channel API passed successfully, verifying:
- Correct status codes
- Proper field structure
- Accurate date formatting
- Appropriate error handling