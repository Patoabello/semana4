import {Faker} from '@faker-js/faker'


const { faker } = require('@faker-js/faker');

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
      return cy.get('.well > .btn').click();
  },
  
  getFisrtname:() => {
      return cy.get('[id="input-firstname"]').type(firstname);
},

  getInputLastName: () => {
      return cy.get('[id="input-lastname"]').type(lastName);
  },
  
  getInputEmail:() => {
      return cy.get('[id="input-email"]').type(email);
  },
 
  getInpuPassWord: () => {
      return cy.get('[id="input-password"]').type(passWord);
  },
 

  getButtonReg: () => {
      return cy.get('[id="submit"]').click();
  }
}