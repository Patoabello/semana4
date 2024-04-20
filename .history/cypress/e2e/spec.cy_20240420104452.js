
let mail = 'applytesters@mydomain.com';
let passw = 'Apply123!!!';

describe('intercept Mock', () => {

  beforeEach(function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
  });

  it('mock', () => {
    
    
      cy.prueba(mail, passw);
     
    
    })
  
}) 