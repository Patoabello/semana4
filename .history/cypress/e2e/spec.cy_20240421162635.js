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
      body: [
        {
            firstName: "Pepe",
            lastName: "Trueno",
            birthdate: "2015-05-07",
            email: "pepetrueno@gmail.com",
            phone: "11111111111",
            street1: "Saltadilla 123",
            city: "Michoacan",
            stateProvince: "Morelos",
            postalCode: "6050",
            country: "Mexico"
          }
      ]
      //fixture: 'intercept.json'
     }).as('fixture')
  
    //cy.visit('https://thinking-tester-contact-list.herokuapp.com')
     
    })
  
  
}) 
