import { dataPage } from "../components/contactList";

let path = "/__/#/specs/runner?file=cypress/e2e/contactList/contactList.spec.js"

describe('intercept Mock', () => {

  beforeEach(function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    dataPage.getCreateCta();
    dataPage.getFisrtname();
    dataPage.getInputLastName();
    dataPage.getInputEmail();
    dataPage.getInpuPassWord();
    dataPage.getRePassWord();
    dataPage.getButtonReg();
  });

 /* it('mock', () => {
      
     // cy.prueba(mail, passw);
     cy.intercept('GET',path, {
      fixture: 'intercept.json'
     }).as('fixture')
     cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    })
  
}) 
*/