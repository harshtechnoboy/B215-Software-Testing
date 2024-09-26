describe('TC10: Enter password with 7 characters', () => {
  it('Should not be able to create a password and give an error', () => {
    const randomString = (length) => {
      return Math.random().toString(36).substr(2, length);
    };
    const name = `User${randomString(5)}`;
    const email = `user${randomString(5)}@example.com`;
    const password = `Pass${randomString(7)}`;
    cy.writeFile('cypress/fixtures/userCredentials.json', { email, password });
    cy.visit('https://sneakervault.onrender.com/signup');
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(password);
    cy.get(':nth-child(4) > .btn').click();
  });
});