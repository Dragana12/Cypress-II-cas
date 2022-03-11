/// <reference types ="cypress" />


it('test create gallery', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/galleries',
    }).as('galleryCreation');

    cy.visit('/create');
    cy.contains('Logout').should('be.visible');

    createGalleryPage.createGallery('test galerija', 'moja galerija', 'neki-jpg.jpg');
    cy.wait('@galleryCreation').then((interception) => {
        console.log('ID', interception.response.body.id);
        expect( interception.response.statusCode).eq(201);
        galleryId = interception.response.body.id;

        cy.visit(`/galleries/${galleryId}`);
        cy.get('h1').should('have.text', 'test galerija');
    })
})