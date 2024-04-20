import { faker } from '@faker-js/faker';

const {faker} = require('@sinonjs/fake-timers')
//const { faker } = require('@faker-js/faker');

let firstname =  faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email();

let passWord = "jugodepera";
export const dataPage = {
    // Login
    getUserName:() => {
        return cy.get('[name="username"]').click().type(firstname)
  },
  getPass:() => {
      return cy.get('[name="password"]').type('1234')
  },
  getButtonLogi:() => {
      return cy.get('[value="Log In"]').click()
  },

  
  // Registro
  getCreateCta:() => {
      return cy.get('#signup').click();
  },
  
  getFisrtname:() => {
      return cy.get('[id="firstName"]').type(firstname);
},

  getInputLastName: () => {
      return cy.get('[id="lastName"]').type(lastName);
  },
  
  getInputEmail:() => {
      return cy.get('[id="email"]').type(email);
  },
 
  getInpuPassWord: () => {
      return cy.get('[id="password"]').type(passWord);
  },
 

  getButtonReg: () => {
      return cy.get('[id="submit"]').click();
  }
}