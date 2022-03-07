/// <reference types="Cypress" />

describe("registration test", () => {

  beforeEach('visit register page', ()=> {
    cy.visit('/register');
    cy.url().should("contain", "/register");
  })

  it("register without first name", () => {
    registerPage.register (lastName, email, passwordField, passwordConfirmation, checkbox);
   cy.get (firstName).should.be.empty ();
  });

  it("register without last name", () => {
    cy.get(Register.firstName).type("ime");
    cy.get(Register.emailField).type("test+@mail.com");
    cy.get(Register.passwordField).type("Test12345!");
    cy.get(Register.passwordConfirmation).type("Test12345!");
    cy.get(Register.checkbox).check();
    cy.get(Register.submitBtn).click();
  });

  it("register with invalid email", () => {
    cy.get("#first-name").type("ime");
    cy.get(Register.lastName).type("prezime");
    cy.get(Register.emailField).type("test+mail.com");
    cy.get(Register.passwordField).type("Test12345!");
    cy.get(Register.passwordConfirmation).type("Test12345!");
    cy.get(Register.checkbox).check();
    cy.get(Register.submitBtn).click();
  });

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