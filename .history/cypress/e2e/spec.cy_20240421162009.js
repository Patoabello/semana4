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

  it('login', () => {
    dataPage.getInputEmail(); 
    dataPage.getPass();
    dataPage.getButtonLogi();

  });

  it ('interecept', () => {
    cy.intercept('GET', '/contacts', {
    
      fixture: 'cypress/fixtures/intercept.json'
     }).as('NewData')
  
    //cy.visit('https://thinking-tester-contact-list.herokuapp.com')
     
    })
  
  
}) 
