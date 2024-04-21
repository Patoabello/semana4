import { dataPage } from "../components/contactList";

let path = "/contacts"

describe('intercept Mock', () => {

  it('crea usurio', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    dataPage.getCreateCta();
    dataPage.getFisrtname();
    dataPage.getInputLastName();
    dataPage.getInputEmail();
    dataPage.getInpuPassWord();
    dataPage.getButtonReg();
  });
 
  it('login usuario', () => {
    dataPage.getInputEmail(); 
    dataPage.getPass();
    dataPage.getButtonLogi();
    cy.wait(500);
  });

  it ('interecepta servicio', () => {
      
      cy.intercept('GET', path, { //capturo el servicio que trae 
       fixture: '/fakeData.json'      // Leo desde el acrivo FakeData.json los contactos que le pasaré
      }).as('fixture')
    
    })
  
  
}) 
