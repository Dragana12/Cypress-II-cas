/// <reference types="cypress" />
import { loginPage } from "../page_objects/loginPOM";

describe("login test POM", ()=> {

    before ("visit app", () => {
        cy.visit("/login");

    });
    it ("login with valid credentials", ()=>{
        loginPage.login('filip.nedovic@vivifyideas.com','Test1234578!');
        cy.get ('p').should('have.css','border-color','rgb(245, 198, 203)');
        cy.get ('p').should('have.css','background-color','rgb(248, 215, 218)');
        cy.get ('p').should('have.css','color','rgb(114, 28, 36)');
        


    });

    it("logout", ()=>{
        cy.wait(500);
     loginPage.logoutBtn.click();
    });

});

