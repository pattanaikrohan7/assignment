Feature: Email Validation for Forgot Password

  Scenario: User receives reset email and is redirected correctly
    Given User navigates to the Forgot Password page
    When User requests a password reset for "test-user@mailinator.com"
    Then User should receive a reset email
    And User should extract the reset link from the email
    And User should be redirected to the password reset page