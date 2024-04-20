import { Faker } from '@faker-js/faker';


const { faker } = require('@faker-js/faker');

let firstname =  faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email();

let passWord = "jugodepera";
export const dataPage = {

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
    },

    getAddContact:() => {
        return cy.get('[id="add-contact"]').click();
    }

}