Feature: Login en la Herokuapp

 Scenario: Login exitoso con credenciales validas
  Given I am on the login page
  When I enter valid username and password
  And I click on Login
  Then I should see the message "You logged into a secure area!"
  And I click on Logout

 Scenario: Login fallido con credenciales invalidas
  Given I am on the login page
  When I enter invalid username and password
  And I click on Login
  Then I should see the error message "Your username is invalid!"

 Scenario: Login con usuario vacio
  Given I am on the login page
  When I leave the username empty and enter the password
  And I click on Login
  Then I should see the error message "Your username is invalid!"
