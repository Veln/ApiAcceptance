Background:
    * configure ssl = true
    * configure logPrettyResponse = true
    * configure headers = read('classpath:config/headers.js')
    * url baseUrl

  Scenario: POST - create ID
    Given path 'apiname/uri'
    And request { "storeId": '1234', "registerNumber": "W100" }
    When method post
    Then status 201
