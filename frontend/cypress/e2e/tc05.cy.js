describe('TC05: Search for a product using valid keywords', () => {
  it('Should be able to display relevant products', ()=> {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
    cy.wait(2000);
    cy.get('#q').click().type('v2');
    cy.get('#button-search').click();
    cy.get('.card-title').contains('Yeezy').should('be.visible');
  });
});