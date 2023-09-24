Feature: Search all sections
  I order to get sections in the platform
  As user with permissions
  I want get sections

  Scenario: All sections 
    Given I send a GET request to "/sections"
    Then the response status code should be 200
