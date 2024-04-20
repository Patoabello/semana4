
let path = "/__/#/specs/runner?file=cypress/e2e/contactList/contactList.spec.js"

describe('intercept Mock', () => {

  beforeEach(function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
  });

  it('mock', () => {
      
     // cy.prueba(mail, passw);
     cy.intercept('GET',path, {
      fixture: 'intercept.json'
     }).as('fixture')
     cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    })
  
}) 