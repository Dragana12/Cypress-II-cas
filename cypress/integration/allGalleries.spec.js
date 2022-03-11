
describe ("allGalleries", () => {

    beforeEach('visit allGalleries', ()=> {
        cy.visit('/');
        cy.url().should("contain", "/");
      })


});