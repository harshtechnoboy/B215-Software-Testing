describe('TC02: Sign up with invalid credentials', () => {
  it('Should not be able to sign up and give an error', () => {
    const randomString = (length) => {
      return Math.random().toString(36).substr(2, length);
    };
    const name = `Invalid User${randomString(5)}`;
    const invalidEmail = `invalid${randomString(5)}@example`;
    const invalidPassword = `Pass${randomString(7)}`;
    cy.visit('https://sneakervault.onrender.com/signup');
    cy.get('#name').type(name);
    cy.get('#email').type(invalidEmail);
    cy.get('#password').type(invalidPassword);
    cy.get('#confirmPassword').type(invalidPassword);
    cy.get(':nth-child(4) > .btn').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible');
  });
});