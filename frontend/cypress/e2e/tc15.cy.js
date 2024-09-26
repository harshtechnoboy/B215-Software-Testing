describe('TC15: Access profile page without sign in', () => {
  it('Should not allow and redirect to first sign in', () => {
    cy.visit('https://sneakervault.onrender.com/profile');
  });
});