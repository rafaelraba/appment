Feature: Create a new preacher
  In order to have preachers in the platform
  As a user with admin permissions
  I want to create a new preacher

  Scenario: A valid non existing preacher
    Given I send a PUT request to "/preachers/84517866-1c59-4384-8c09-e5c9babeba56" with body:
    """
    {
      "name": "Rafael Eduardo Rafael Moreno",
      "gender": "M",
      "birthDate": "1992-02-08",
      "baptismDate": "2002-12-14",
      "state":"ACTIVE",
      "privilege":"ELDER",
      "type":"PREACHER"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: A invalid non existing preacher
    Given I send a PUT request to "/preachers/84517866-1c59-4384-8c09-e5c9babeba55" with body:
    """
    {
      "name": "Rafael Eduardo Rafael Moreno",
      "gender": "M",
      "birthDate": "1992-02-08",
      "baptismDate": "2002-12-14",
      "state":1,
      "privilege":"ELDER",
      "type":"PREACHER"
    }
    """
    Then the response status code should be 422
