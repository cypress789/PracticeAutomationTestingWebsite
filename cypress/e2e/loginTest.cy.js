import  LoginPage  from '../support/POM/loginPage';
import loginData from '../fixtures/loginData.json';

const loginPage = new LoginPage();

describe('Login Functionality - Automation Practice Site', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    loginPage.visit();
    loginPage.clickMyAccount();
  });

  it('1. Login with valid username and password', () => {
    loginPage.getUsernameField().type(loginData.validUser.username);
    loginPage.getPasswordField().type(loginData.validUser.password);
    loginPage.getLoginButton().click();

    loginPage.getLogoutLink().should('be.visible');
  });

  it('2. Invalid username and invalid password', () => {
    loginPage.getUsernameField().type(loginData.invalidUser.username);
    loginPage.getPasswordField().type(loginData.invalidUser.password);
    loginPage.getLoginButton().click();

    loginPage.getErrorMessage()
      .should('contain', 'A user could not be found with this email address');
  });

  it.only('3. Valid username and empty password', () => {
    loginPage.getUsernameField().type(loginData.validUser.username);
    loginPage.getLoginButton().click();

    loginPage.getErrorMessage()
      .should('contain', 'Error: Password is required.');
  });

  it('4. Empty username and valid password', () => {
    loginPage.getPasswordField().type(loginData.validUser.password);
    loginPage.getLoginButton().click();

    loginPage.getErrorMessage()
      .should('contain', 'Username is required');
  });

  it('5. Empty username and empty password', () => {
    loginPage.getLoginButton().click();

    loginPage.getErrorMessage()
      .should('contain', 'Error: Username is required.');
  });

  it('6. Password should be masked', () => {
    loginPage.getPasswordField().should('have.attr', 'type', 'password');
  });

  it('7. Login is case-sensitive', () => {
    loginPage.getUsernameField().type(loginData.caseUser.username);
    loginPage.getPasswordField().type(loginData.caseUser.password);
    loginPage.getLoginButton().click();

    loginPage.getErrorMessage().should('contain', 'Invalid');
  });

  it('8. Logout and back button check (should not re-login)', () => {
    loginPage.getUsernameField().type(loginData.validUser.username);
    loginPage.getPasswordField().type(loginData.validUser.password);
    loginPage.getLoginButton().click();

    loginPage.getLogoutLink().should('be.visible').first().click();
    cy.go('back');

    loginPage.getLoginForm().should('exist');
  });

  it('9. Lost your password - reset flow', () => {
    loginPage.clickLostPassword();
    cy.url().should('include', 'lost-password');

    loginPage.enterResetEmail(loginData.resetEmail);
    loginPage.clickResetPassword();

    loginPage.getResetConfirmationMessage()

      .should('contain', 'Password reset email has been Sent');
  });

  // it('10. Remember Me - username should be remembered', () => {
  //   loginPage.getUsernameField().type(loginData.validUser.username);
  //   loginPage.getPasswordField().type(loginData.validUser.password);
  //   loginPage.getRememberMeCheckbox().check();
  //   loginPage.getLoginButton().click();

  //   loginPage.getLogoutLink().should('be.visible').first().click();

  //   cy.visit('http://practice.automationtesting.in/my-account/');
  //   loginPage.getUsernameField()
  //     .should('have.value', loginData.validUser.username);
  // });
});

























// import { LoginPage } from '../support/POM/loginPage';
// import loginData from '../fixtures/loginData.json'

// const loginPage = new LoginPage();

// describe('Login Functionality - Automation Practice Site', () => {


 
//   beforeEach(() => {
//     loginPage.visit();
//     cy.viewport(1440, 900);
//     loginPage.clickMyAccount();
//   });

//   it('1. Login with valid username and password', () => {
//     loginPage.enterUsername(loginData.validUser.username);
//     loginPage.enterPassword(loginData.validUser.password);
//     loginPage.clickLogin();
//     loginPage.getLogoutLink().should('be.visible');
//   });

//   it('2. Invalid username and invalid password', () => {
//     loginPage.enterUsername(loginData.invalidUser.username);
//     loginPage.enterPassword(loginData.invalidUser.password);
//     loginPage.clickLogin();
//     loginPage.getErrorMessage().should('contain', 'A user could not be found with this email address.');
//   });

//   it('3. Valid username and empty password', () => {
//     loginPage.enterUsername(loginData.validUser.username);
//     loginPage.enterPassword(loginData.emptyPassword);
//     loginPage.clickLogin();
//     loginPage.getErrorMessage().should('contain', 'The password field is empty.');
//   });

//   it('4. Empty username and valid password', () => {
//     loginPage.enterUsername(loginData.emptyUsername);
//     loginPage.enterPassword(loginData.validUser.password);
//     loginPage.clickLogin();
//     loginPage.getErrorMessage().should('contain', 'Username is required');
//   });

//   it('5. Empty username and empty password', () => {
//     loginPage.enterUsername(loginData.emptyUsername);
//     loginPage.enterPassword(loginData.emptyPassword);
//     loginPage.clickLogin();
//     loginPage.getErrorMessage().should('contain', 'Username is required');
//   });

//   it('6. Password should be masked', () => {
//     loginPage.isPasswordMasked();
//   });

//   it('7. Login is case-sensitive', () => {
//     loginPage.enterUsername(loginData.caseUser.username);
//     loginPage.enterPassword(loginData.caseUser.password);
//     loginPage.clickLogin();
//     loginPage.getErrorMessage().should('contain', 'Invalid');
//   });

//   it('8. Login-Authentication and Back Button Check after Logout', () => {
//     loginPage.enterUsername(loginData.validUser.username);
//     loginPage.enterPassword(loginData.validUser.password);
//     loginPage.clickLogin();

//     loginPage.getLogoutLink().should('be.visible');
//     loginPage.getLogoutLink().eq(0).click();
//     cy.go('back');

//     loginPage.getLoginForm().should('exist');
//   });

//   it('9. Lost your password - Password reset flow', () => {
//     loginPage.clickLostPassword();
//     cy.url().should('include', 'lost-password');

//     loginPage.enterResetEmail(loginData.resetEmail);
//     loginPage.clickResetPassword();

//     loginPage.getResetConfirmationMessage().should('contain', 'Password reset email has been sent');
//   });

//   it('10. Remember Me - Session persists or username remembered', () => {
//     loginPage.enterUsername(loginData.validUser.username);
//     loginPage.enterPassword(loginData.validUser.password);
//     loginPage.checkRememberMe();
//     loginPage.clickLogin();

//     loginPage.getLogoutLink().should('be.visible');
//     loginPage.clickLogout();

//     cy.visit('https://practice.automationtesting.in/my-account/');
//     loginPage.getUsernameField().should('have.value', loginData.validUser.username);
//   });
// }); 