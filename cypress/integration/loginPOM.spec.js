/// <reference types="cypress" />
import { loginPage } from "../page_objects/loginPOM";

describe("login test POM", ()=> {

    before ("visit app", () => {
        cy.visit("/login");

    });
    it ("login with valid credentials", ()=>{
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
          }).as('loginRequest');
        loginPage.login('mila1@dpq.com','test1234');
    

    });

    it("logout", ()=>{
        cy.wait(500);
     loginPage.logoutBtn.click();
    });

});

