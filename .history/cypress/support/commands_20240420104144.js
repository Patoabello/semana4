// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('prueba', (user, pass) => {
    cy.get('#input-email').type(user);
    cy.get('#input-password').type(pass);
    cy.get('input[type="submit"].btn.btn-primary').click();

});

Cypress.Commands.add('search',(findProduct) => {
    cy.get('input[name="search"]').should('be.visible').type(findProduct);
    cy.get('button.btn.btn-default.btn-lg').click();
    cy.get('#button-search').click();
    cy.get('h1').first().should('have.text', 'Search - Macbook');

});

Cypress.Commands.add('logout', () => {
   cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
   cy.get('a.list-group-item').contains('Logout').click();
   cy.get('h1').should('be.visible');
   cy.get('h1').first().should('have.text', 'Account Logout');
})