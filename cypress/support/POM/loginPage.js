
 class LoginPage {
  visit() {
    cy.visit('http://practice.automationtesting.in/');
  }

  clickMyAccount() {
    cy.get('#menu-item-50 > a').click();
  }

  getUsernameField() {
    return cy.get('#username'); 
  }

  getPasswordField() {
    return cy.get('#password'); 
  }

  getLoginButton() {
    return cy.get('[name="login"]'); 
  }

  getErrorMessage() {
    return cy.get('.woocommerce-error > li');
  }

  getLogoutLink() {
    return cy.get('a[href*="customer-logout"]');
  }

  getRememberMeCheckbox() {
    return cy.get('#rememberme'); 
  }

  getLostPasswordLink() {
    return cy.contains('Lost your password?');
  }

  getResetEmailField() {
    return cy.get('#user_login');
  }

  getResetPasswordButton() {
    return cy.get('[value="Reset Password"]');
  }

  getResetConfirmationMessage() {
    return cy.get('div.woocommerce-message');
  }
}
export default LoginPage





























// // cypress/support/pages/loginPage.js
// export class LoginPage {
//   visit() {
//     cy.visit('http://practice.automationtesting.in/');
//   }

//   clickMyAccount() {
//     cy.get('#menu-item-50 > a').click(); // "My Account" menu
//   }

//   enterUsername(username) {
//     cy.get('#username').clear().type(username);
//   }

//   enterPassword(password) {
//     cy.get('#password').clear().type(password);
//   }

//   clickLogin() {
//     cy.get('[name="login"]').click();
//   }

//   getErrorMessage() {
//     return cy.get('.woocommerce-error > li');
//   }

//   isPasswordMasked() {
//     return cy.get('#password').should('have.attr', 'type', 'password');
//   }

//   getLogoutLink() {
//     return cy.get('a[href*="customer-logout"]');
//   }
//   getLoginForm(){
//     return cy.get('form.login')
//   }
//   checkRememberMe() {
//   cy.get('#rememberme').check();
// }

// clickLostPassword() {
//   cy.contains('Lost your password?').click();
// }
// enterResetEmail(email) {
//   cy.get('#user_login').type(email);
// }

// clickResetPassword() {
//   cy.get('[value="Reset Password"]').click();
// }

// getResetConfirmationMessage() {
//   return cy.get('div.woocommerce-message');
// }
// checkRememberMe() {
//   cy.get('#rememberme').check();
// }

// clickLogout() {
//   this.getLogoutLink().eq(0).click();
// }
// getUsernameField() {
//   return cy.get('#username');
// }

// }