class RegisterPage {
    get registerHeading() {
      return cy.get("h1");
    }
  
    get firstNameField() {
      return cy.get("#first-name");
    }
  
    get lastNameField() {
      return cy.get("#last-name");
    }
  
    get emailField() {
      return cy.get("#email");
    }
  
    get passwordField() {
      return cy.get("#password");
    }
  
    get passwordConfirmationField() {
      return cy.get("#password-confirmation");
    }
  
    get checkbox() {
      return cy.get(":checkbox");
    }
  
    get submitBtn() {
      return cy.get("button");
    }
  
    register(firstName, lastName, email, password) {
      this.firstNameField.type(firstName);
      this.lastNameField.type(lastName);
      this.emailField.type(email);
      this.passwordField.type(password);
      this.passwordConfirmationField.type(password);
  
      this.checkbox.check();
      this.submitBtn.click();
    }
  }
  
  export const registerPage = new RegisterPage();