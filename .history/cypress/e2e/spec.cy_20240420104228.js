describe('intercept Mock', () => {

  beforeEach(function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
  });

  it('mock', () => {
    it('passes', () => {
    
      cy.prueba(mail, passw);
      cy.search(findProduct);
      cy.logout();
  
    
    })
  })
}) 