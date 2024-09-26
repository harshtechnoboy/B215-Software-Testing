describe('TC14: Sign out from website successfully ', () => {
  it('Should be able to sign out', ()=> {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
    cy.get('#basic-nav-dropdown').click();
    cy.get('[href="/#signout"]').click();
  });
});