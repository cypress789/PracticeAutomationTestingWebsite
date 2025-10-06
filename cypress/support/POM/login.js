class Login {
  getUserNameField() {
    return cy.get('#username'); // locator
  }

  getPasswordField() {
    return cy.get('#password'); // add password field
  }

  getLoginButton() {
    return cy.get('#loginBtn'); // add login button
  }

  login(username, password){
    this.getUserNameField().type(username)
    this.getPasswordField().type(password)
    this.getLoginButton().click()
  }
}

export default Login()