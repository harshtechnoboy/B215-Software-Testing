describe('TC04: Sign in with invalid credentials', () => {
  it('Should not be able to sign in and give an error', () => {
    const randomString = (length) => {
      return Math.random().toString(36).substr(2, length);
    };
    const invalidEmail = `invalid${randomString(5)}@example.com`;
    const invalidPassword = `Pass${randomString(8)}`;
    cy.visit('https://sneakervault.onrender.com/signin');
    cy.get('#email').type(invalidEmail);
    cy.get('#password').type(invalidPassword);
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible');
  });
});