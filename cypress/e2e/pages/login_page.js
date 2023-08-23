export class LoginPage {
  username_field =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password_field =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  login_button = ".oxd-button";

  enterUsername(username) {
    cy.get(this.username_field).type(username);
  }
  enterPassword(password) {
    cy.get(this.password_field).type(password);
  }
  clickLogin() {
    cy.get(this.login_button).click();
  }
}
