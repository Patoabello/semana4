import { dataPage } from "../components/contactList";

let path = "/contactList"

describe('intercept Mock', () => {

  it('mock', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    dataPage.getCreateCta();
    dataPage.getFisrtname();
    dataPage.getInputLastName();
    dataPage.getInputEmail();
    dataPage.getInpuPassWord();
    dataPage.getButtonReg();
  });

  it('intercept', () => {
    dataPage.getInputEmail(); 
    dataPage.getPass();
    dataPage.getButtonLogi();

   
    cy.intercept('GET', '/__/#/specs/runner?file=cypress/e2e/spec.cy.js', {
      fixture: 'intercept.json'
     }).as('fixture')
     const namesToCheck = ['Pepe', 'Chavo', 'Elon', 'Luis', 'Pedro'];
     cy.visit('https://thinking-tester-contact-list.herokuapp.com')
     
    })
  
}) 
