describe('TC13:Check order history after placing order', () => {
  it('Should be able to view order history', () => {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
    cy.get('#basic-nav-dropdown').click();
    cy.get('[href="/orderhistory"]').click();
  });
});