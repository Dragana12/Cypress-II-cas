import { registerPage } from "../page_objects/register";
import {faker} from 



beforeEach('visit register page', ()=> {
    cy.visit('/register');
    cy.url().should("contain", "/register");
  });


  it('register with valid data', () => {
      cy.intercept ({
          method: 'POST',
          url: 'https://gallery-api.vivifyideas.com/api/auth/register',
    }).as('registerRequest');

    registerPage.register (
        fakeUserData.firstName,
        fakeUserData.lastName,
        fakeUserData.email,
        fakeUserData.password,
    );
    cy.wait('@registerRequest').then((interception) => {
        expect(interception.request.body.first_name).eq(fakerUserData.firstName);
        expect(interception.request.body.last_name).eq(fakerUserData.lastName);
        expect(interception.request.body.email).eq(fakerUserData.email);
        expect(interception.request.body.password).eq(fakerUserData.password);
        expect(interception.request.body.password_confirmation).eq(fakerUserData.password_confirmation);
        expect(interception.response.body.statusCode).eq(200);
    });

  });