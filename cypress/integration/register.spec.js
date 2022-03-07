/// <reference types="Cypress" />
import {registerPage} from "../page_objects/register";

describe("registration test", () => {

  beforeEach('visit register page', ()=> {
    cy.visit('/register');
    cy.url().should("contain", "/register");
  })

  it("register without first name", () => {
    registerPage.register(' ', 'lastName','email','password','checkbox');
   registerPage.firstNameField.should('be.empty')
  });

  it("register without last name", () => {
    registerPage.register('firstName ', ' ','email','password','checkbox');
   registerPage.lastNameField.should('be.empty');
   
  });

  it("register with invalid email", () => {
    registerPage.register('firstName ','lastName','email','password','checkbox');
   registerPage.emailField.should('have.text', "");
    
  });

  it("Submit button", () => {
registerPage.register ('firstName ','lastName','email','password','checkbox');
registerPage.submitBtn.should ('have.text', 'Submit');

  });
  it.only("Checkbox field", () => {
    registerPage.register ('firstName ','lastName','email','password','checkbox');
    registerPage.checkbox.should ('be.visible', 'on.click');
  })

  it("register with invalid password confirmation", () => {
    cy.get("#first-name").type("ime");
    cy.get(Register.lastName).type("prezime");
    cy.get(Register.emailField).type("test+@mail.com");
    cy.get(Register.passwordField).type("Test12345!");
    cy.get(Register.passwordConfirmation).type("Test12345");
    cy.get(Register.checkbox).check();
    cy.get(Register.submitBtn).click();
  });

  it("register withhout checking terms and conditions", () => {
    cy.get("#first-name").type("ime");
    cy.get(Register.lastName).type("prezime");
    cy.get(Register.emailField).type("test+@mail.com");
    cy.get(Register.passwordField).type("Test12345!");
    cy.get(Register.passwordConfirmation).type("Test12345!");
    cy.get(Register.submitBtn).click();
  });

  it("register with valid data", () => {
    cy.get("#first-name").type("ime");
    cy.get(Register.lastName).type("prezime");
    cy.get(Register.emailField).type("test+@mail.com");
    cy.get(Register.passwordField).type("Test12345!");
    cy.get(Register.passwordConfirmation).type("Test12345!");
    cy.get(Register.checkbox).check();
    cy.get(Register.submitBtn).click();
  });
});