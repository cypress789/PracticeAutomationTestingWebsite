import loginData from '../fixtures/loginData.json';
import Login from '../support/POM/login';

describe('Login Functionality - Automation Practice Site', () => {
  it('Login with valid credentials', () => {
    cy.visit('http://practice.automationtesting.in/my-account/');

    const login = new Login(); // ✅ create object here
    login.login(loginData.validUser.username, loginData.validUser.password);

    // Assertion
    cy.contains('Logout').should('be.visible');
  });
});