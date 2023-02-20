Feature: Create a new preacher
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing preacher
    Given I send a PUT request to "/preachers/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "name": "Rafael Eduardo Rafael Moreno",
      "gender": "M",
      "birthDate": "1992-02-08",
      "baptismDate": "2002-12-14",
      "state":"ACTIVE",
      "privilege":"ELDER",
      "preacherType":"PREACHER"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: A invalid non existing preacher
    Given I send a PUT request to "/preachers/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "name": "Rafael Eduardo Rafael Moreno",
      "gender": "M",
      "birthDate": "1992-02-08",
      "baptismDate": "2002-12-14",
      "state":1,
      "privilege":"ELDER",
      "preacherType":"PREACHER"
    }
    """
    Then the response status code should be 422
