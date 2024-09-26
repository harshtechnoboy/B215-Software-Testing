describe('TC03: Sign in with valid credentials', () => {
  it('Should be able to sign in', () => {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
  });
});