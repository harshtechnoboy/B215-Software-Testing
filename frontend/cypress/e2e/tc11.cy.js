describe('TC11: Checkout with valid payment details', () => {
  it('Should be able to make payment', () => {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
      cy.wait(2000);
    });
    const randomString = (length) => {
      return Math.random().toString(36).substr(2, length);
    };
    const fullname = `User${randomString(5)}`;
    const address = `Street ${randomString(2)}`;
    const city = `City ${randomString(2)}`;
    const postalcode = `${randomString(5)}`;
    cy.get('.card').then(($cards) => {
      const titles = $cards.map((index, card) => {
        return Cypress.$(card).find('.card-title').text();
      }).get();
      const randomIndex = Math.floor(Math.random() * titles.length);
      cy.get('.card').contains(titles[randomIndex]).click();
    });
    cy.get('.badge').contains('In Stock');
    cy.get('.d-grid > .btn').click();
    cy.wait(2000);
    cy.get('.d-grid > .btn').click();
    cy.get('#fullName').type(fullname);
    cy.get('#address').type(address);
    cy.get('#city').type(city);
    cy.get('#postalCode').type(postalcode);
    cy.get('#country').type('Germany');
    cy.get(':nth-child(6) > .btn').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(2000);
    cy.get('.d-grid > .btn').click();
    cy.wait(2000);
    cy.intercept('POST', '/api/paypal/payment', {
      statusCode: 200,
      body: { success: true, message: 'Payment processed successfully' },
    }).as('Paypal');
  });
});