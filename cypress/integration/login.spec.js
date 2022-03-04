/// <reference types="cypress" />
const Locators = require('../fixtures/Locators.json');
const { faker } = require('@faker-js/faker');
describe("login test", () => {

  let userData = {

    randomName:faker.name.findName(),
    randomEmail:faker.internet.email(),
    randomPassword:faker.internet.password(),
  }
    before("visit app", () => {
      cy.visit("/");
    });
  
    it("login with valid credentials", () => {
      console.log('sifra', userData.randomPassword);
      cy.get(Locators.Header.button).eq(1).click();
    //cy.get(#email).type("filip.nedovic@vivifyideas.com");
      cy.get(Locators.CommonElements.emailField).type(userData.randomEmail);
      cy.get(Locators.CommonElements.passwordField).type("Test12345!");
      cy.get(Locators.CommonElements.submitBtn).click();
    });
  
    it("logout", () => {
     cy.get(Locators.Header.button).should("have.length", 4);
     cy.get(Locators.Header.button).eq(3).click();
    });
  });